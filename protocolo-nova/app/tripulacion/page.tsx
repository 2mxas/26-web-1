"use client";
import { useEffect, useState } from "react";

export default function TripulacionPage() {
  // 🔴 TAREA ESTUDIANTE:
  // 1. Crear estado [tripulantes, setTripulantes]
  // 2. useEffect para llamar a 'https://dummyjson.com/users'
  // 3. Mapear los datos a componentes Card

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-emerald-500 mb-8">MANIFIESTO DE TRIPULACIÓN</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Renderizado de Cards aquí */}
      </div>
    </div>
  );
}