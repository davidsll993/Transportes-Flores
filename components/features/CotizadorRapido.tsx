"use client";

import React from "react";
import { useQuote } from "@/context/QuoteContext";

export default function CotizadorRapido() {
  const { quoteData, setQuoteData, nextStep, prevStep, resetQuote } = useQuote();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setQuoteData((prev) => ({ ...prev, [name]: value }));
  };

  const renderStep = () => {
    switch (quoteData.step) {
      case 1:
        return (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="font-headline-md text-headline-md font-bold text-on-surface">Ruta del Envío</h3>
            <p className="text-surface-variant font-body-md opacity-80 mb-6">Selecciona el origen y destino.</p>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-label-caps uppercase text-on-surface-variant">Origen (C.P. o Ciudad)</label>
              <input
                type="text"
                name="origen"
                value={quoteData.origen}
                onChange={handleInputChange}
                className="w-full bg-surface-container-high border border-outline-variant rounded p-3 text-on-surface industrial-focus font-body-md transition-all"
                placeholder="Ej. Monterrey, NL"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-label-caps uppercase text-on-surface-variant">Destino (C.P. o Ciudad)</label>
              <input
                type="text"
                name="destino"
                value={quoteData.destino}
                onChange={handleInputChange}
                className="w-full bg-surface-container-high border border-outline-variant rounded p-3 text-on-surface industrial-focus font-body-md transition-all"
                placeholder="Ej. Ciudad de México"
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-500">
            <h3 className="font-headline-md text-headline-md font-bold text-on-surface">Detalles de Carga</h3>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-label-caps uppercase text-on-surface-variant">Tipo de Carga</label>
              <select
                name="tipoCarga"
                value={quoteData.tipoCarga}
                onChange={handleInputChange}
                className="w-full bg-surface-container-high border border-outline-variant rounded p-3 text-on-surface industrial-focus font-body-md"
              >
                <option value="">Selecciona...</option>
                <option value="caja-seca">Caja Seca</option>
                <option value="refrigerado">Refrigerado</option>
                <option value="plataforma">Plataforma</option>
                <option value="peligroso">Material Peligroso</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-label-caps uppercase text-on-surface-variant">Peso Estimado (Ton)</label>
              <input
                type="number"
                name="peso"
                value={quoteData.peso}
                onChange={handleInputChange}
                className="w-full bg-surface-container-high border border-outline-variant rounded p-3 text-on-surface industrial-focus font-body-md"
                placeholder="Ej. 15"
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-500">
            <h3 className="font-headline-md text-headline-md font-bold text-on-surface">Resumen de Cotización</h3>
            <div className="bg-surface-container p-4 rounded border border-outline/20">
              <ul className="space-y-2 font-body-md text-on-surface">
                <li><strong>Origen:</strong> {quoteData.origen || "N/A"}</li>
                <li><strong>Destino:</strong> {quoteData.destino || "N/A"}</li>
                <li><strong>Tipo:</strong> {quoteData.tipoCarga || "N/A"}</li>
                <li><strong>Peso:</strong> {quoteData.peso ? `${quoteData.peso} Ton` : "N/A"}</li>
              </ul>
            </div>
            <p className="text-sm text-surface-variant italic mt-4">Un agente se pondrá en contacto con una tarifa exacta en menos de 5 minutos.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-surface border-t-4 border-primary rounded-lg shadow-xl p-6 md:p-8 w-full max-w-md mx-auto h-full flex flex-col relative overflow-hidden">
      {/* Decorative dots pattern in corner */}
      <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
        <div className="grid grid-cols-3 gap-1">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-on-surface rounded-full"></div>
          ))}
        </div>
      </div>
      
      {/* Step Indicator */}
      <div className="flex justify-between items-center mb-8 relative">
        <div className="absolute left-0 top-1/2 w-full h-0.5 bg-outline-variant -z-10 -translate-y-1/2"></div>
        {[1, 2, 3].map((s) => (
          <div
            key={s}
            className={`w-8 h-8 rounded-full flex items-center justify-center font-label-caps text-xs ${
              quoteData.step >= s
                ? "bg-primary text-on-primary"
                : "bg-surface-container-highest text-on-surface-variant border border-outline-variant"
            } transition-colors duration-300`}
          >
            {s}
          </div>
        ))}
      </div>

      <div className="flex-grow">
        {renderStep()}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8 pt-4 border-t border-outline/10">
        {quoteData.step > 1 ? (
          <button
            onClick={prevStep}
            className="px-4 py-2 font-button text-secondary border border-outline hover:bg-surface-container rounded transition-colors"
          >
            Atrás
          </button>
        ) : (
          <div></div>
        )}

        {quoteData.step < 3 ? (
          <button
            onClick={nextStep}
            className="px-6 py-2 bg-secondary text-on-secondary font-button rounded hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-colors shadow"
          >
            Siguiente
          </button>
        ) : (
          <button
            onClick={() => {
              alert("Solicitud enviada a un agente.");
              resetQuote();
            }}
            className="px-6 py-2 bg-primary text-on-primary font-button rounded hover:bg-primary-container hover:text-on-primary-container transition-colors shadow"
          >
            Confirmar Solicitud
          </button>
        )}
      </div>
    </div>
  );
}
