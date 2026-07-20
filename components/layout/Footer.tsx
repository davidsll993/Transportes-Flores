import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-secondary dark:bg-on-secondary-fixed text-on-secondary dark:text-on-secondary-fixed-variant grid grid-cols-1 md:grid-cols-4 gap-lg px-margin-mobile md:px-margin-desktop py-xl w-full border-t-8 border-primary">
      <div className="col-span-1 md:col-span-1 space-y-4">
        <div className="mb-4 relative w-64 h-24 overflow-hidden rounded-xl bg-white shadow-lg flex items-center justify-center">
          <img src="/logo.jpg" alt="Transportes Flores" className="absolute w-full h-full object-contain scale-[3] transform-gpu pointer-events-none" />
        </div>
        <p className="text-sm opacity-80 font-body-md">Soluciones logísticas industriales de alto rendimiento.</p>
        <div className="flex gap-4 pt-2">
          <a className="hover:text-primary-fixed-dim transition-colors" href="#">
            <span className="material-symbols-outlined">language</span>
          </a>
          <a className="hover:text-primary-fixed-dim transition-colors" href="#">
            <span className="material-symbols-outlined">share</span>
          </a>
        </div>
      </div>
      <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-md">
        <div>
          <h4 className="font-label-caps text-label-caps text-primary-fixed-dim mb-4 uppercase">Empresa</h4>
          <ul className="space-y-2 font-body-md text-sm">
            <li>
              <Link className="text-surface-variant opacity-80 hover:opacity-100 hover:text-primary-fixed hover:underline transition-all" href="#">
                Aviso de Privacidad
              </Link>
            </li>
            <li>
              <Link className="text-surface-variant opacity-80 hover:opacity-100 hover:text-primary-fixed hover:underline transition-all" href="#">
                Términos y Condiciones
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-label-caps text-label-caps text-primary-fixed-dim mb-4 uppercase">Portales</h4>
          <ul className="space-y-2 font-body-md text-sm">
            <li>
              <Link className="text-surface-variant opacity-80 hover:opacity-100 hover:text-primary-fixed hover:underline transition-all" href="#">
                Portal Clientes
              </Link>
            </li>
            <li>
              <Link className="text-surface-variant opacity-80 hover:opacity-100 hover:text-primary-fixed hover:underline transition-all" href="#">
                Acceso Empleados
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-span-1 border-t border-outline/20 md:border-t-0 pt-4 md:pt-0">
        <h4 className="font-label-caps text-label-caps text-primary-fixed-dim mb-4 uppercase">Contacto</h4>
        <div className="space-y-2 font-body-md text-sm text-surface-variant opacity-80">
          <p className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px]">call</span> 722 499 6901
          </p>
          <p className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px]">mail</span> administracion@tflores.mx
          </p>
        </div>
      </div>
      <div className="col-span-1 md:col-span-4 border-t border-outline/20 pt-4 mt-4 text-center text-xs text-surface-variant opacity-60 font-body-md">
        © {new Date().getFullYear()} Transportes Flores. Todos los derechos reservados.
      </div>
    </footer>
  );
}
