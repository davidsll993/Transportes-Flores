import React from 'react';

export const metadata = {
  title: 'Quiénes Somos | Transportes Flores',
  description: 'Conoce la historia, misión y visión de Transportes Flores.',
};

export default function QuienesSomosPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-24 flex items-center justify-center overflow-hidden bg-surface-container">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-container/80 z-10 backdrop-blur-sm"></div>
          <div className="absolute inset-0 opacity-20 z-10" style={{ backgroundImage: "radial-gradient(#fff 2px, transparent 2px)", backgroundSize: "30px 30px" }}></div>
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop text-center animate-fade-in-up">
          <span className="font-label-caps text-label-caps text-primary-fixed-dim uppercase tracking-widest block mb-4">Sobre Nosotros</span>
          <h1 className="text-display-lg font-display-lg text-on-primary tracking-tight drop-shadow-lg mb-6">Nuestra Historia y Compromiso</h1>
          <p className="text-body-lg font-body-lg text-on-primary/90 max-w-3xl mx-auto">
            En Transportes Flores ofrecemos soluciones de transporte de carga confiables, seguras y eficientes, adaptadas a las necesidades de cada cliente. Entendemos la importancia de cumplir tiempos de entrega y cuidar cada carga como si fuera propia.
          </p>
        </div>
      </section>

      {/* Main Info Section */}
      <section className="py-xl max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg items-center">
          <div className="space-y-md">
            <h2 className="text-headline-lg font-headline-lg text-on-surface">Misión</h2>
            <div className="bg-surface-container-low/50 rounded-2xl p-md border-l-4 border-primary shadow-sm space-y-sm hover:shadow-md transition-shadow duration-300">
              <p className="font-body-md text-on-surface-variant">
                Ofrecer soluciones de transporte de carga confiables y eficientes, con unidades modernas, operadores capacitados y un servicio de calidad, superando las expectativas de nuestros clientes y contribuyendo al desarrollo de sus operaciones con responsabilidad, seguridad y puntualidad.
              </p>
            </div>
            
            <h2 className="text-headline-lg font-headline-lg text-on-surface pt-4">Visión</h2>
            <div className="bg-surface-container-low/50 rounded-2xl p-md border-l-4 border-secondary shadow-sm space-y-sm hover:shadow-md transition-shadow duration-300">
              <p className="font-body-md text-on-surface-variant">
                Ser una empresa líder en el transporte de carga a nivel nacional, reconocida por nuestra eficiencia, seguridad y compromiso con la excelencia. Buscamos innovar constantemente y fortalecer relaciones estratégicas que impulsen el crecimiento de nuestros clientes y colaboradores, contribuyendo al desarrollo de la industria y del país.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white/80 backdrop-blur-md border border-outline-variant/30 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <span className="material-symbols-outlined text-4xl text-primary mb-4 bg-primary/10 p-3 rounded-xl inline-block">verified_user</span>
              <h3 className="font-headline-md text-xl text-on-surface mb-2">Unidades Aseguradas</h3>
              <p className="text-sm text-on-surface-variant">Todas nuestras unidades cuentan con seguro a la unidad para brindar protección y tranquilidad en cada traslado.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-md border border-outline-variant/30 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <span className="material-symbols-outlined text-4xl text-secondary mb-4 bg-secondary/10 p-3 rounded-xl inline-block">engineering</span>
              <h3 className="font-headline-md text-xl text-on-surface mb-2">Operadores Capacitados</h3>
              <p className="text-sm text-on-surface-variant">Operadores profesionales y altamente capacitados, comprometidos con la seguridad y el mejor servicio.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-md border border-outline-variant/30 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <span className="material-symbols-outlined text-4xl text-primary mb-4 bg-primary/10 p-3 rounded-xl inline-block">stars</span>
              <h3 className="font-headline-md text-xl text-on-surface mb-2">Servicio de Calidad</h3>
              <p className="text-sm text-on-surface-variant">Altos estándares de calidad, puntualidad y responsabilidad para garantizar la satisfacción de nuestros clientes.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-md border border-outline-variant/30 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <span className="material-symbols-outlined text-4xl text-secondary mb-4 bg-secondary/10 p-3 rounded-xl inline-block">handshake</span>
              <h3 className="font-headline-md text-xl text-on-surface mb-2">Compromiso y Confianza</h3>
              <p className="text-sm text-on-surface-variant">Relaciones comerciales duraderas basadas en la confianza, compromiso y comunicación constante.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Alliance Banner */}
      <section className="bg-gradient-to-r from-surface-container to-surface-variant py-16 text-center border-y border-outline-variant/40">
        <div className="max-w-4xl mx-auto px-margin-mobile">
          <span className="material-symbols-outlined text-5xl text-primary mb-4 drop-shadow-sm">groups</span>
          <h2 className="text-headline-md font-headline-md text-on-surface mb-4">Tu Aliado Estratégico</h2>
          <p className="text-body-lg text-on-surface-variant">
            Nuestro objetivo es convertirnos en un aliado estratégico para su empresa, aportando soluciones de transporte que impulsen el crecimiento y la continuidad de sus operaciones.
          </p>
        </div>
      </section>
    </div>
  );
}
