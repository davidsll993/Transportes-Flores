import React from "react";
import Image from "next/image";
import mockFlota from "@/data/mockFlota.json";

export default function FlotaGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
      {mockFlota.map((truck) => (
        <div
          key={truck.id}
          className="bg-surface-container rounded-lg overflow-hidden border border-outline/20 group hover:border-primary transition-all shadow hover:shadow-lg relative"
        >
          <div className="relative h-64 w-full bg-surface-container-high overflow-hidden">
            <Image
              src={truck.url}
              alt={truck.nombre}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Status Badge */}
            <div className="absolute top-4 right-4">
              <span
                className={`px-3 py-1 rounded-full text-xs font-label-caps uppercase ${
                  truck.gps_status === "Disponible"
                    ? "bg-[#d4edda] text-[#155724]"
                    : truck.gps_status === "En Tránsito"
                    ? "bg-[#cce5ff] text-[#004085]"
                    : "bg-[#f8d7da] text-[#721c24]"
                }`}
              >
                {truck.gps_status}
              </span>
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-headline-md text-lg font-bold text-on-surface group-hover:text-primary transition-colors">
              {truck.nombre}
            </h3>
            <div className="flex items-center gap-2 text-surface-variant font-body-md mt-2 opacity-80">
              <span className="material-symbols-outlined text-[18px]">weight</span>
              <span>{truck.capacidad}</span>
            </div>
            
            <button className="mt-4 w-full border border-secondary text-secondary font-button py-2 rounded hover:bg-secondary hover:text-on-secondary transition-colors">
              Ver Detalles
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
