import React from 'react';

export const metadata = {
  title: 'Servicios | Transportes Flores',
  description: 'Conoce nuestras soluciones de transporte de carga y servicios.',
};

export default function ServiciosPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-24 flex items-center justify-center overflow-hidden bg-surface-container">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-container/80 z-10 backdrop-blur-sm"></div>
          <div className="absolute inset-0 opacity-20 z-10" style={{ backgroundImage: "radial-gradient(#fff 2px, transparent 2px)", backgroundSize: "30px 30px" }}></div>
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop text-center animate-fade-in-up">
          <span className="font-label-caps text-label-caps text-primary-fixed-dim uppercase tracking-widest block mb-4">Lo que hacemos</span>
          <h1 className="text-display-lg font-display-lg text-on-primary tracking-tight drop-shadow-lg mb-6">Soluciones de transporte que mueven tu negocio</h1>
          <p className="text-body-lg font-body-lg text-on-primary/90 max-w-3xl mx-auto">
            Ofrecemos servicios de transporte de carga confiables, seguros y eficientes, adaptados a las necesidades de tu empresa.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-xl max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-12">
          <h2 className="text-headline-lg font-headline-lg text-on-surface">Nuestros Servicios</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Cajas 53 */}
          <div className="bg-surface-container-low rounded-3xl p-8 border border-outline-variant/30 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
            <div className="bg-surface p-4 rounded-2xl w-max mb-6 group-hover:scale-110 transition-transform shadow-sm">
              <span className="material-symbols-outlined text-5xl text-primary">local_shipping</span>
            </div>
            <h3 className="text-headline-md font-headline-md text-on-surface mb-3">Cajas de 53 Pies</h3>
            <p className="text-body-md text-on-surface-variant">Mayor capacidad para tus envíos de gran volumen.</p>
          </div>
          
          {/* Cajas 48 */}
          <div className="bg-surface-container-low rounded-3xl p-8 border border-outline-variant/30 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
            <div className="bg-surface p-4 rounded-2xl w-max mb-6 group-hover:scale-110 transition-transform shadow-sm">
              <span className="material-symbols-outlined text-5xl text-secondary">local_shipping</span>
            </div>
            <h3 className="text-headline-md font-headline-md text-on-surface mb-3">Cajas de 48 Pies</h3>
            <p className="text-body-md text-on-surface-variant">Versatilidad y eficiencia para tus operaciones.</p>
          </div>
          
          {/* Servicio Dedicado */}
          <div className="bg-surface-container-low rounded-3xl p-8 border border-outline-variant/30 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
            <div className="bg-surface p-4 rounded-2xl w-max mb-6 group-hover:scale-110 transition-transform shadow-sm">
              <span className="material-symbols-outlined text-5xl text-primary">support_agent</span>
            </div>
            <h3 className="text-headline-md font-headline-md text-on-surface mb-3">Servicio Dedicado</h3>
            <p className="text-body-md text-on-surface-variant">Unidades y operadores asignados exclusivamente a tu empresa, con disponibilidad, flexibilidad y atención personalizada.</p>
          </div>
        </div>

        {/* Botón Solicitar Cotización centrado */}
        <div className="flex justify-center mt-12">
          <a
            href="/#cotizacion"
            className="bg-primary text-white hover:bg-primary-container px-10 py-4 rounded-xl font-button text-button transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center gap-3 group"
          >
            <span className="material-symbols-outlined transition-transform group-hover:scale-110">calculate</span>
            Solicitar Cotización
          </a>
        </div>
      </section>

      {/* Coverage Map Section */}
      <section className="bg-surface-container-high py-xl border-y border-outline-variant/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "24px 24px" }}></div>
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-headline-lg font-headline-lg text-on-surface">Cubrimos toda la República Mexicana</h2>
            <p className="text-body-lg text-on-surface-variant mt-2 max-w-2xl mx-auto">Cobertura local y foránea para llegar a donde tu negocio lo necesite.</p>
          </div>
          
          <div className="bg-surface/80 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-8 md:p-12 relative">
            <div className="aspect-[4/3] md:aspect-[21/9] bg-[#0a1128] rounded-2xl relative overflow-hidden flex items-center justify-center border border-primary/20 shadow-inner group">
              {/* High-Tech Map Background */}
              <img src="/mexico_map.png" alt="Mapa de Cobertura México" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128] via-transparent to-transparent opacity-90"></div>
              
              {/* Animated Location Pins */}
              {/* Tijuana */}
              <div className="absolute top-[20%] left-[15%] group">
                <div className="w-4 h-4 bg-primary rounded-full shadow-[0_0_20px_rgba(181,22,52,1)] animate-ping absolute"></div>
                <div className="w-4 h-4 bg-primary rounded-full relative z-10 border-2 border-white"></div>
              </div>
              
              {/* Monterrey */}
              <div className="absolute top-[40%] left-[50%] group">
                <div className="w-5 h-5 bg-secondary rounded-full shadow-[0_0_20px_rgba(64,98,123,1)] animate-ping absolute" style={{ animationDelay: '0.5s' }}></div>
                <div className="w-5 h-5 bg-secondary rounded-full relative z-10 border-2 border-white"></div>
              </div>
              
              {/* CDMX (Origin) */}
              <div className="absolute top-[65%] left-[55%] group">
                <div className="w-6 h-6 bg-primary rounded-full shadow-[0_0_30px_rgba(181,22,52,1)] animate-ping absolute" style={{ animationDuration: '1s' }}></div>
                <div className="w-6 h-6 bg-primary rounded-full relative z-10 border-2 border-white flex items-center justify-center">
                   <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div className="absolute top-8 -left-8 bg-white/90 backdrop-blur-md px-3 py-1 rounded text-xs font-bold text-primary shadow-lg border border-primary/20 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">HUB Central</div>
              </div>
              
              {/* Cancún */}
              <div className="absolute top-[60%] left-[85%] group">
                <div className="w-4 h-4 bg-secondary rounded-full shadow-[0_0_20px_rgba(64,98,123,1)] animate-ping absolute" style={{ animationDelay: '1.2s' }}></div>
                <div className="w-4 h-4 bg-secondary rounded-full relative z-10 border-2 border-white"></div>
              </div>

              <div className="relative z-20 bg-[#0a1128]/80 backdrop-blur-md px-6 py-3 rounded-full shadow-2xl border border-primary/50 flex items-center gap-3 font-headline-md text-white mt-auto mb-8">
                <span className="material-symbols-outlined text-primary animate-bounce">satellite_alt</span>
                Monitoreo Nacional en Tiempo Real
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 text-center divide-x divide-outline-variant/30">
              <div className="px-4">
                <div className="text-primary mb-2"><span className="material-symbols-outlined text-3xl">schedule</span></div>
                <div className="font-bold text-on-surface">Puntualidad</div>
                <div className="text-sm text-on-surface-variant">en cada entrega</div>
              </div>
              <div className="px-4">
                <div className="text-primary mb-2"><span className="material-symbols-outlined text-3xl">shield</span></div>
                <div className="font-bold text-on-surface">Seguridad</div>
                <div className="text-sm text-on-surface-variant">en tu mercancía</div>
              </div>
              <div className="px-4">
                <div className="text-primary mb-2"><span className="material-symbols-outlined text-3xl">support_agent</span></div>
                <div className="font-bold text-on-surface">Atención</div>
                <div className="text-sm text-on-surface-variant">personalizada</div>
              </div>
              <div className="px-4">
                <div className="text-primary mb-2"><span className="material-symbols-outlined text-3xl">handshake</span></div>
                <div className="font-bold text-on-surface">Compromiso</div>
                <div className="text-sm text-on-surface-variant">y confianza</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
