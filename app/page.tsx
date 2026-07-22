"use client";
import React, { useState } from 'react';

const ESTADOS_MEXICO = [
  "", "Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Chiapas", "Chihuahua",
  "Ciudad de México", "Coahuila", "Colima", "Durango", "Estado de México", "Guanajuato", "Guerrero",
  "Hidalgo", "Jalisco", "Michoacán", "Morelos", "Nayarit", "Nuevo León", "Oaxaca", "Puebla",
  "Querétaro", "Quintana Roo", "San Luis Potosí", "Sinaloa", "Sonora", "Tabasco", "Tamaulipas",
  "Tlaxcala", "Veracruz", "Yucatán", "Zacatecas"
];

export default function Home() {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    direccion: '',
    origen: '',
    destino: '',
    tipo: "Caja Seca 53'"
  });

  const handleCotizar = (e: React.FormEvent) => {
    e.preventDefault();
    const { nombre, empresa, direccion, origen, destino, tipo } = formData;
    const text = `Hola, quisiera cotizar un servicio.\n\n*Datos del Cliente:*\nNombre: ${nombre}\nEmpresa: ${empresa}\nDirección: ${direccion}\n\n*Detalles del Servicio:*\nOrigen: ${origen}\nDestino: ${destino}\nTipo de Unidad: ${tipo}`;
    const url = `https://wa.me/527224996901?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };
  return (
    <>
      {/* 2. Hero Section */}
      <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center bg-inverse-surface overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover object-[center_65%] opacity-80 scale-105 transition-transform duration-[20s] ease-out hover:scale-110" alt="Logistics vehicle" src="/hero-bg.jpg" />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop flex flex-col items-center justify-center text-center">
          <h1 className="text-display-lg font-display-lg text-on-primary tracking-tight drop-shadow-md mb-4 max-w-4xl">
            Soluciones Logísticas a Gran Escala y Conectividad Nacional
          </h1>
          <p className="text-body-lg font-body-lg text-surface-variant max-w-2xl drop-shadow mb-10">
            Seguridad, puntualidad y tecnología de vanguardia para mover tu negocio.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <a href="/quienes-somos" className="bg-primary text-white px-8 py-3 md:py-4 rounded font-button text-button transition-all duration-300 hover:bg-primary-container hover:scale-105 shadow-lg flex items-center justify-center">
              SOBRE NOSOTROS
            </a>
            <a href="/contacto" className="bg-secondary text-white px-8 py-3 md:py-4 rounded font-button text-button transition-all duration-300 hover:bg-secondary-container hover:scale-105 shadow-lg flex items-center justify-center">
              CONTACTO
            </a>
            <button onClick={() => { document.getElementById('cotizacion')?.scrollIntoView({ behavior: 'smooth' }); setTimeout(() => document.getElementById('input-nombre')?.focus(), 500); }} className="bg-white text-primary px-8 py-3 md:py-4 rounded font-button text-button font-bold transition-all duration-300 hover:bg-gray-100 hover:scale-105 shadow-lg flex items-center justify-center">
              COTIZA
            </button>
          </div>
        </div>
      </section>

      {/* 3. Quick Quote Widget */}
      <section id="cotizacion" className="relative z-20 -mt-xl px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto w-full scroll-mt-32">
        <div className="bg-surface/85 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/40 p-md transition-all duration-500 hover:shadow-primary/10 hover:-translate-y-1">
          <div className="mb-sm text-secondary font-headline-md text-headline-md flex items-center gap-xs">
            <span className="material-symbols-outlined text-primary">calculate</span>
            Cotización Rápida
          </div>
          <form onSubmit={handleCotizar} className="flex flex-col gap-sm">
            {/* Fila 1: Datos del cliente */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-sm">
              <div className="industrial-border rounded-xl bg-white/90 px-3 py-2 industrial-focus transition-all duration-300 hover:border-primary/50">
                <label className="block text-label-caps font-label-caps text-on-surface-variant mb-1">Nombre Completo</label>
                <div className="flex items-center gap-2 text-on-surface">
                  <span className="material-symbols-outlined text-tertiary text-sm">person</span>
                  <input id="input-nombre" required value={formData.nombre} onChange={(e) => setFormData({...formData, nombre: e.target.value})} className="w-full bg-transparent border-none p-0 focus:ring-0 text-body-md font-body-md placeholder:text-surface-dim outline-none" placeholder="Juan Pérez" type="text" />
                </div>
              </div>
              <div className="industrial-border rounded-xl bg-white/90 px-3 py-2 industrial-focus transition-all duration-300 hover:border-primary/50">
                <label className="block text-label-caps font-label-caps text-on-surface-variant mb-1">Empresa</label>
                <div className="flex items-center gap-2 text-on-surface">
                  <span className="material-symbols-outlined text-tertiary text-sm">business</span>
                  <input required value={formData.empresa} onChange={(e) => setFormData({...formData, empresa: e.target.value})} className="w-full bg-transparent border-none p-0 focus:ring-0 text-body-md font-body-md placeholder:text-surface-dim outline-none" placeholder="Mi Empresa S.A." type="text" />
                </div>
              </div>
              <div className="industrial-border rounded-xl bg-white/90 px-3 py-2 industrial-focus transition-all duration-300 hover:border-primary/50">
                <label className="block text-label-caps font-label-caps text-on-surface-variant mb-1">Dirección</label>
                <div className="flex items-center gap-2 text-on-surface">
                  <span className="material-symbols-outlined text-tertiary text-sm">home</span>
                  <input required value={formData.direccion} onChange={(e) => setFormData({...formData, direccion: e.target.value})} className="w-full bg-transparent border-none p-0 focus:ring-0 text-body-md font-body-md placeholder:text-surface-dim outline-none" placeholder="Calle, Ciudad" type="text" />
                </div>
              </div>
            </div>
            
            {/* Fila 2: Detalles del viaje */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-sm items-end">
              <div className="industrial-border rounded-xl bg-white/90 px-3 py-2 industrial-focus transition-all duration-300 hover:border-primary/50">
                <label className="block text-label-caps font-label-caps text-on-surface-variant mb-1">Origen</label>
                <div className="flex items-center gap-2 text-on-surface">
                  <span className="material-symbols-outlined text-tertiary text-sm">location_on</span>
                  <select required value={formData.origen} onChange={(e) => setFormData({...formData, origen: e.target.value})} className="w-full bg-transparent border-none p-0 focus:ring-0 text-body-md font-body-md text-on-surface appearance-none outline-none cursor-pointer">
                    <option value="" disabled>Selecciona un estado</option>
                    {ESTADOS_MEXICO.filter(e => e !== "").map(estado => (
                      <option key={estado} value={estado}>{estado}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="industrial-border rounded-xl bg-white/90 px-3 py-2 industrial-focus transition-all duration-300 hover:border-primary/50">
                <label className="block text-label-caps font-label-caps text-on-surface-variant mb-1">Destino</label>
                <div className="flex items-center gap-2 text-on-surface">
                  <span className="material-symbols-outlined text-tertiary text-sm">flag</span>
                  <select required value={formData.destino} onChange={(e) => setFormData({...formData, destino: e.target.value})} className="w-full bg-transparent border-none p-0 focus:ring-0 text-body-md font-body-md text-on-surface appearance-none outline-none cursor-pointer">
                    <option value="" disabled>Selecciona un estado</option>
                    {ESTADOS_MEXICO.filter(e => e !== "").map(estado => (
                      <option key={estado} value={estado}>{estado}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="industrial-border rounded-xl bg-white/90 px-3 py-2 industrial-focus transition-all duration-300 hover:border-primary/50">
                <label className="block text-label-caps font-label-caps text-on-surface-variant mb-1">Tipo de Unidad/Carga</label>
                <div className="flex items-center gap-2 text-on-surface">
                  <span className="material-symbols-outlined text-tertiary text-sm">local_shipping</span>
                  <select value={formData.tipo} onChange={(e) => setFormData({...formData, tipo: e.target.value})} className="w-full bg-transparent border-none p-0 focus:ring-0 text-body-md font-body-md text-on-surface appearance-none outline-none cursor-pointer">
                    <option value="Caja Seca 53'">Caja Seca 53'</option>
                    <option value="Caja Seca 48'">Caja Seca 48'</option>
                  </select>
                </div>
              </div>
              <button className="bg-gradient-to-r from-secondary to-tertiary text-on-secondary px-6 py-4 rounded-xl font-button text-button h-full flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-secondary/30 transition-all duration-300 hover:scale-[1.02] active:scale-95" type="submit">
                <span className="material-symbols-outlined">send</span>
                Enviar a WhatsApp
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* 4. Trust Stats */}
      <section className="bg-gradient-to-b from-surface-container to-surface py-xl mt-lg border-y border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter text-center divide-x divide-outline-variant/50">
            <div className="px-sm flex flex-col items-center group cursor-default">
              <span className="material-symbols-outlined text-primary text-4xl mb-xs fill-icon transition-transform duration-300 group-hover:scale-125 group-hover:text-primary-container">route</span>
              <span className="font-headline-md text-headline-md text-on-surface block transition-colors duration-300 group-hover:text-primary">+5,000</span>
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase mt-1">Viajes Anuales</span>
            </div>
            <div className="px-sm flex flex-col items-center group cursor-default">
              <span className="material-symbols-outlined text-primary text-4xl mb-xs fill-icon transition-transform duration-300 group-hover:scale-125 group-hover:text-primary-container">local_shipping</span>
              <span className="font-headline-md text-headline-md text-on-surface block transition-colors duration-300 group-hover:text-primary">200+</span>
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase mt-1">Flota Moderna</span>
            </div>
            <div className="px-sm flex flex-col items-center group cursor-default">
              <span className="material-symbols-outlined text-primary text-4xl mb-xs fill-icon transition-transform duration-300 group-hover:scale-125 group-hover:text-primary-container">satellite_alt</span>
              <span className="font-headline-md text-headline-md text-on-surface block transition-colors duration-300 group-hover:text-primary">24/7</span>
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase mt-1">Monitoreo Satelital GPS</span>
            </div>
            <div className="px-sm flex flex-col items-center group cursor-default">
              <span className="material-symbols-outlined text-primary text-4xl mb-xs fill-icon transition-transform duration-300 group-hover:scale-125 group-hover:text-primary-container">verified</span>
              <span className="font-headline-md text-headline-md text-on-surface block transition-colors duration-300 group-hover:text-primary">CTPAT/OEA</span>
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase mt-1">Certificaciones</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. About Us & Vision */}
      <section className="py-xl max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg items-center">
          <div className="lg:col-span-5 space-y-md">
            <div className="inline-block border border-primary/40 bg-primary/5 text-primary px-4 py-1.5 font-label-caps text-label-caps rounded-full uppercase tracking-widest backdrop-blur-sm">
              Liderazgo Logístico
            </div>
            <h2 className="text-headline-lg font-headline-lg text-on-surface leading-tight">Innovación continua en cada kilómetro recorrido.</h2>
            <div className="bg-surface-container-low/50 rounded-2xl p-md border-l-4 border-primary shadow-sm space-y-sm hover:shadow-md transition-shadow duration-300">
              <p className="font-body-md text-body-md text-on-surface-variant">
                <strong className="text-on-surface font-semibold">Nuestra Misión:</strong> Ofrecer soluciones de transporte de carga confiables y eficientes, con unidades modernas y operadores altamente capacitados.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant">
                <strong className="text-on-surface font-semibold">Visión:</strong> Ser una empresa líder en el transporte de carga a nivel nacional, reconocida por nuestra eficiencia, seguridad y compromiso con la excelencia.
              </p>
            </div>
            <button className="text-secondary font-button text-button hover:text-primary transition-colors flex items-center gap-1 group">
              Conoce más sobre nosotros
              <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
            </button>
          </div>
          <div className="lg:col-span-7 relative group">
            <div className="aspect-[4/3] bg-surface-container overflow-hidden rounded-3xl border border-outline-variant/30 relative z-10 shadow-xl transition-transform duration-500 group-hover:scale-[1.02]">
              <img className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" alt="Maintenance protocols" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCD2Kd-vg3ntjWD3aw8MU_s_Ax2u2OECPiBXZmwUJH3vFejkyMnosfe2YVtxFw2Rl4EPyW9x3lJi7yq2mwS6V-U6zmxsmsi47n8J0-ww1RjNgtrW-ImExSS9KCyefRfKlEfL25f6sgwijZYW-GjAKpW7oK5LmLOBgK0y3hXHAMlVAglpwr-iX4p_spLZV8PJeYWh-eyIkJY1F8ughUltsSVfHgf0ckJJYFLBEIQ91sxnUFL5rMuoQnzk2St2eHTTq00-YPkJWd-kVA" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-2xl z-0 hidden md:block transition-all duration-500 group-hover:scale-125"></div>
          </div>
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
              
              {/* Animated Location Pins (Simulating cities: Tijuana, Monterrey, CDMX, Cancún) */}
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
          </div>
        </div>
      </section>

      {/* 6. Fleet Gallery */}
      <section className="bg-surface py-xl border-t border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-lg">
            <div>
              <h2 className="text-headline-lg font-headline-lg text-on-surface mb-2">Nuestra Flota</h2>
              <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl">Unidades modernas, supervisadas y equipadas para garantizar la seguridad de tu carga.</p>
            </div>
            <button className="hidden md:flex bg-surface-container border border-outline-variant text-on-surface px-6 py-3 rounded-xl font-button text-button mt-4 md:mt-0 hover:bg-secondary hover:text-on-secondary hover:border-secondary transition-all duration-300 hover:shadow-lg">
              Ver Especificaciones
            </button>
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
          <button className="md:hidden w-full bg-secondary text-on-secondary px-6 py-4 rounded-xl font-button text-button mt-md shadow-lg active:scale-95 transition-transform">
            Ver Especificaciones
          </button>
        </div>
      </section>

      {/* 7. Recruitment Banner */}
      <section className="bg-gradient-to-r from-primary via-[#9a112a] to-[#7a0b1f] text-on-primary py-xl relative overflow-hidden shadow-inner">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "24px 24px" }}></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop relative z-10 flex flex-col md:flex-row items-center justify-between gap-md text-center md:text-left">
          <div className="max-w-2xl">
            <span className="font-label-caps text-label-caps uppercase tracking-widest text-primary-fixed-dim block mb-3 opacity-90">Bolsa de Trabajo</span>
            <h2 className="text-headline-lg font-headline-lg mb-3 drop-shadow-md">¿Eres operador? Únete a la flota más grande del país</h2>
            <p className="text-on-primary/90 font-body-md text-lg font-medium">Beneficios superiores, capacitación constante y las mejores unidades.</p>
          </div>
          <a href="/bolsa-de-trabajo" className="bg-white/95 backdrop-blur-md text-primary px-8 py-4 rounded-xl font-button text-button hover:bg-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 whitespace-nowrap flex items-center gap-2 group">
            <span className="material-symbols-outlined transition-transform duration-300 group-hover:rotate-12">badge</span>
            Ver Vacantes
          </a>
        </div>
      </section>
    </>
  );
}
