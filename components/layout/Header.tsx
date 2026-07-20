"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-surface dark:bg-surface-container-high border-b border-outline-variant dark:border-outline w-full px-margin-mobile md:px-margin-desktop py-4 max-w-full mx-auto z-50 sticky top-0">
      <div className="flex justify-between items-center">
        <div className="text-headline-md font-headline-md font-black text-secondary dark:text-secondary-fixed-dim tracking-tight flex items-center">
          <Link href="/" className="flex items-center justify-center w-48 h-16 relative">
            <img src="/logo.jpg" alt="Transportes Flores" className="absolute w-full h-full object-contain mix-blend-multiply scale-[3] transform-gpu pointer-events-none" />
          </Link>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-gutter">
          <Link className="text-primary dark:text-primary-fixed-dim border-b-2 border-primary font-bold pb-1 text-label-caps font-label-caps" href="/">Inicio</Link>
          <Link className="text-on-surface-variant hover:text-primary transition-colors text-label-caps font-label-caps hover:bg-surface-container-low px-2 py-1 rounded" href="/quienes-somos">Quiénes Somos</Link>
          <Link className="text-on-surface-variant hover:text-primary transition-colors text-label-caps font-label-caps hover:bg-surface-container-low px-2 py-1 rounded" href="/servicios">Servicios</Link>
          <Link className="text-on-surface-variant hover:text-primary transition-colors text-label-caps font-label-caps hover:bg-surface-container-low px-2 py-1 rounded" href="/flota">Flota</Link>
          <Link className="text-on-surface-variant hover:text-primary transition-colors text-label-caps font-label-caps hover:bg-surface-container-low px-2 py-1 rounded" href="/bolsa-de-trabajo">Bolsa de Trabajo</Link>
          <Link className="text-on-surface-variant hover:text-primary transition-colors text-label-caps font-label-caps hover:bg-surface-container-low px-2 py-1 rounded" href="/contacto">Contacto</Link>
        </div>
        
        <div className="hidden md:flex gap-sm">
          <Link href="/login" className="text-secondary border border-secondary bg-transparent hover:bg-surface-container-low px-4 py-2 rounded font-button text-button transition-transform active:scale-95 inline-flex items-center justify-center">
            Iniciar Sesión
          </Link>
          <button className="bg-primary text-on-primary hover:bg-primary-container px-4 py-2 rounded font-button text-button transition-transform active:scale-95">
            Solicitar Cotización
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-on-surface p-2 rounded hover:bg-surface-container-low">
          <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden mt-4 flex flex-col gap-2 border-t border-outline-variant pt-4 pb-2 animate-fade-in-up">
          <Link onClick={() => setIsOpen(false)} className="text-on-surface py-2 px-4 hover:bg-surface-container-low rounded font-bold" href="/">Inicio</Link>
          <Link onClick={() => setIsOpen(false)} className="text-on-surface py-2 px-4 hover:bg-surface-container-low rounded" href="/quienes-somos">Quiénes Somos</Link>
          <Link onClick={() => setIsOpen(false)} className="text-on-surface py-2 px-4 hover:bg-surface-container-low rounded" href="/servicios">Servicios</Link>
          <Link onClick={() => setIsOpen(false)} className="text-on-surface py-2 px-4 hover:bg-surface-container-low rounded" href="/flota">Flota</Link>
          <Link onClick={() => setIsOpen(false)} className="text-on-surface py-2 px-4 hover:bg-surface-container-low rounded" href="/bolsa-de-trabajo">Bolsa de Trabajo</Link>
          <Link onClick={() => setIsOpen(false)} className="text-on-surface py-2 px-4 hover:bg-surface-container-low rounded" href="/contacto">Contacto</Link>
          <div className="flex flex-col gap-2 mt-4 md:hidden">
            <button className="bg-primary text-on-primary py-3 rounded font-button text-button shadow-lg active:scale-95 transition-transform">Solicitar Cotización</button>
            <Link onClick={() => setIsOpen(false)} href="/login" className="text-center text-secondary border border-secondary py-3 rounded font-button text-button hover:bg-surface-container-low transition-colors active:scale-95">Iniciar Sesión</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
