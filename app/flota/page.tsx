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
          <div className="flex-1 w-full flex justify-center relative z-10 py-8 md:py-0">
            <div className="relative w-full max-w-[500px] mx-auto mt-4 md:mt-0 z-10 group-hover:-translate-y-2 transition-transform duration-700">
              {/* Laptop Mockup */}
              <div className="bg-slate-900 p-2 md:p-3 rounded-t-2xl border-4 border-slate-800 shadow-2xl relative aspect-[16/10] overflow-hidden">
                {/* Camera dot */}
                <div className="absolute top-1 inset-x-0 flex justify-center">
                  <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
                </div>
                <img src="/dashboard-gps.png" alt="Dashboard en Laptop" className="w-full h-full object-cover object-left-top rounded-sm mt-1" />
              </div>
              {/* Laptop Base */}
              <div className="bg-slate-300 h-3 md:h-4 w-[110%] -ml-[5%] rounded-b-xl relative shadow-2xl flex justify-center border-t border-slate-400">
                <div className="w-1/4 h-1 md:h-1.5 bg-slate-400 rounded-b-md"></div>
              </div>

              {/* Phone Mockup overlapping */}
              <div className="absolute -bottom-10 -right-2 md:-right-8 w-28 md:w-36 h-56 md:h-72 bg-slate-900 rounded-[1.5rem] md:rounded-[2rem] border-[6px] border-slate-800 shadow-2xl overflow-hidden z-20 group-hover:-translate-y-4 transition-transform duration-700">
                {/* Phone Notch */}
                <div className="absolute top-0 inset-x-0 h-4 md:h-5 flex justify-center z-30">
                  <div className="w-1/3 h-full bg-slate-800 rounded-b-xl"></div>
                </div>
                <img src="/dashboard-gps.png" alt="App en Celular" className="w-full h-full object-cover object-center scale-150" />
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
