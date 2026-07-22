import React from 'react';

export const metadata = {
  title: 'Nuestra Flota | Transportes Flores',
  description: 'Conoce nuestras unidades de transporte, cajas y protocolos de seguridad.',
};

export default function FlotaPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-24 flex items-center justify-center overflow-hidden bg-surface-container">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-container/80 z-10 backdrop-blur-sm"></div>
          <div className="absolute inset-0 opacity-20 z-10" style={{ backgroundImage: "radial-gradient(#fff 2px, transparent 2px)", backgroundSize: "30px 30px" }}></div>
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop text-center animate-fade-in-up">
          <span className="font-label-caps text-label-caps text-primary-fixed-dim uppercase tracking-widest block mb-4">Tecnología y Vehículos</span>
          <h1 className="text-display-lg font-display-lg text-on-primary tracking-tight drop-shadow-lg mb-6">Nuestras Unidades, Nuestro Compromiso</h1>
          <p className="text-body-lg font-body-lg text-on-primary/90 max-w-3xl mx-auto">
            La seguridad y el buen estado de nuestras unidades son clave para ofrecer un servicio confiable y eficiente. Trabajamos bajo un riguroso programa de mantenimiento y supervisión.
          </p>
        </div>
      </section>
      {/* Fleet Showcase */}
      <section className="bg-surface py-xl border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-headline-lg font-headline-lg text-on-surface mb-2">Conoce Nuestras Unidades</h2>
            <p className="text-body-lg text-on-surface-variant max-w-2xl">
              Disponemos de tractocamiones de modelo reciente y cajas secas de 48 y 53 pies en excelentes condiciones, ideales para transportar tu carga de manera segura y eficiente a cualquier parte de la república.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-md md:h-[500px]">
            <div className="relative group overflow-hidden rounded-3xl border border-outline-variant/20 bg-surface-container-low shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer h-[400px] md:h-full">
              <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Caja Seca de 48" src="/flota-48.jpg" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 p-lg w-full transform transition-transform duration-500 group-hover:-translate-y-2">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full mb-3 inline-block shadow-sm uppercase tracking-wide">Nuestra Flota</span>
                    <h3 className="text-headline-lg md:text-display-sm font-headline-lg text-white">Caja Seca de 48&apos;</h3>
                    <p className="text-white/80 font-body-md mt-2">Eficiencia y versatilidad para tus traslados.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-3xl border border-outline-variant/20 bg-surface-container-low shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer h-[400px] md:h-full">
              <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Caja Seca de 53" src="/flota-53.jpg" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 p-lg w-full transform transition-transform duration-500 group-hover:-translate-y-2">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full mb-3 inline-block shadow-sm uppercase tracking-wide">Gran Volumen</span>
                    <h3 className="text-headline-lg md:text-display-sm font-headline-lg text-white">Caja Seca de 53&apos;</h3>
                    <p className="text-white/80 font-body-md mt-2">Máxima capacidad para operaciones a gran escala.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GPS & Security Banner */}
      <section className="py-xl max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="bg-gradient-to-br from-surface-container-low to-surface border border-outline-variant/50 rounded-3xl p-8 md:p-12 shadow-xl flex flex-col md:flex-row items-center gap-12 relative overflow-hidden group">
          {/* Decorative glow */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl transition-all duration-700 group-hover:scale-150"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-secondary/10 rounded-full blur-3xl transition-all duration-700 group-hover:scale-150"></div>
          
          <div className="flex-1 relative z-10">
            <h2 className="text-headline-lg font-headline-lg text-on-surface mb-4">
              Tu carga, siempre localizada, <span className="text-primary">siempre segura.</span>
            </h2>
            <p className="text-body-lg text-on-surface-variant mb-6">
              La seguridad y confianza de nuestros clientes son nuestra prioridad. Nuestras unidades cuentan con localización GPS las 24 horas, los 365 días del año.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">location_on</span>
                <div>
                  <h4 className="font-bold text-on-surface">Localización en Tiempo Real</h4>
                  <p className="text-sm text-on-surface-variant">Sigue la ubicación exacta de tu carga en todo momento.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">shield_locked</span>
                <div>
                  <h4 className="font-bold text-on-surface">Mayor Seguridad</h4>
                  <p className="text-sm text-on-surface-variant">Supervisión constante para prevenir cualquier eventualidad y actuar de inmediato.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">groups</span>
                <div>
                  <h4 className="font-bold text-on-surface">Equipo de Monitoreo</h4>
                  <p className="text-sm text-on-surface-variant">Personal altamente capacitado que supervisa en tiempo real.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mockup visual */}
          <div className="flex-1 w-full flex justify-center relative z-10">
            <div className="w-72 h-[500px] bg-slate-900 rounded-[2.5rem] border-[10px] border-slate-800 shadow-2xl relative overflow-hidden flex flex-col group-hover:-translate-y-4 transition-transform duration-700">
              {/* Phone Notch */}
              <div className="absolute top-0 inset-x-0 h-7 flex justify-center z-30">
                <div className="w-1/3 h-full bg-slate-800 rounded-b-xl"></div>
              </div>
              
              {/* Map Background Pattern */}
              <div className="absolute inset-0 z-0 bg-slate-900" style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px),
                  linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
                `,
                backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px',
                backgroundPosition: '-2px -2px, -2px -2px, -1px -1px, -1px -1px'
              }}></div>
              
              {/* Simulated Route Line */}
              <svg className="absolute inset-0 w-full h-full z-0 opacity-40" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M 20 80 Q 40 50, 80 20" fill="none" stroke="#e01a22" strokeWidth="1.5" strokeDasharray="3,3" className="animate-pulse" />
              </svg>

              {/* Marker & Radar */}
              <div className="flex-1 flex flex-col items-center justify-center relative z-10 mt-8">
                 {/* Radar Ping */}
                 <div className="w-32 h-32 bg-primary/10 border border-primary/30 rounded-full absolute animate-[ping_3s_ease-in-out_infinite]"></div>
                 <div className="w-20 h-20 bg-primary/20 rounded-full absolute animate-[ping_3s_ease-in-out_infinite_1s]"></div>
                 
                 {/* Pin */}
                 <div className="relative z-10 flex flex-col items-center">
                   <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-primary">
                     <span className="material-symbols-outlined text-primary text-xl">local_shipping</span>
                   </div>
                   <div className="w-2 h-2 bg-primary rounded-full mt-1 animate-pulse"></div>
                 </div>
                 
                 {/* Status Card */}
                 <div className="absolute bottom-8 left-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl shadow-xl text-left">
                   <div className="flex justify-between items-center mb-2">
                     <span className="text-white font-bold text-sm">Unidad 145</span>
                     <span className="flex h-2 w-2 relative">
                       <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                       <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                     </span>
                   </div>
                   <div className="text-white/70 text-xs mb-1">Ruta: CDMX - MTY</div>
                   <div className="text-white/70 text-xs flex justify-between">
                     <span>Velocidad: 78 km/h</span>
                     <span className="text-green-400 font-medium">En tiempo</span>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance & Boxes */}
      <section className="bg-surface-container py-xl border-y border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <h2 className="text-headline-lg font-headline-lg text-on-surface mb-2">Mantenimiento y Supervisión</h2>
              <p className="text-body-md text-on-surface-variant mb-6">En Transportes Flores, cada unidad y cada caja son supervisadas con detalle, porque tu carga merece viajar segura y en las mejores condiciones.</p>
              
              <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow hover:shadow-md transition-shadow border border-outline-variant/40 flex gap-4">
                <span className="material-symbols-outlined text-4xl text-secondary">verified_user</span>
                <div>
                  <h3 className="font-headline-md text-on-surface">Unidades Aseguradas</h3>
                  <p className="text-sm text-on-surface-variant">Todas nuestras unidades cuentan con seguro a la unidad para brindar protección y tranquilidad en cada traslado.</p>
                </div>
              </div>
              
              <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow hover:shadow-md transition-shadow border border-outline-variant/40 flex gap-4">
                <span className="material-symbols-outlined text-4xl text-secondary">build_circle</span>
                <div>
                  <h3 className="font-headline-md text-on-surface">Servicio Preventivo</h3>
                  <p className="text-sm text-on-surface-variant">Realizamos servicio y mantenimiento preventivo a cada unidad de manera periódica, prolongando su vida útil.</p>
                </div>
              </div>
              
              <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow hover:shadow-md transition-shadow border border-outline-variant/40 flex gap-4">
                <span className="material-symbols-outlined text-4xl text-secondary">fact_check</span>
                <div>
                  <h3 className="font-headline-md text-on-surface">Supervisión Constante</h3>
                  <p className="text-sm text-on-surface-variant">A las cajas se les supervisa constantemente para garantizar que cumplan con nuestros estándares de calidad.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-secondary to-tertiary-container rounded-3xl p-8 text-on-secondary shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <h3 className="text-headline-lg font-headline-lg mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-4xl">inventory_2</span>
                Nuestras Cajas
              </h3>
              <p className="text-body-lg mb-6 opacity-90">Contamos con cajas de 53 y 48 pies, las cuales se supervisan constantemente para asegurar que estén:</p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 bg-black/10 p-3 rounded-lg backdrop-blur-sm">
                  <span className="material-symbols-outlined text-primary-container">check_circle</span>
                  <span>Sin fallas estructurales</span>
                </li>
                <li className="flex items-center gap-3 bg-black/10 p-3 rounded-lg backdrop-blur-sm">
                  <span className="material-symbols-outlined text-primary-container">check_circle</span>
                  <span>Sin filtraciones de agua ni orificios</span>
                </li>
                <li className="flex items-center gap-3 bg-black/10 p-3 rounded-lg backdrop-blur-sm">
                  <span className="material-symbols-outlined text-primary-container">check_circle</span>
                  <span>Limpieza y condiciones óptimas</span>
                </li>
                <li className="flex items-center gap-3 bg-black/10 p-3 rounded-lg backdrop-blur-sm">
                  <span className="material-symbols-outlined text-primary-container">check_circle</span>
                  <span>Listas para cada ruta</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
