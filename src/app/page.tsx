import React from "react";
import Link from "next/link";


export default function Homepage() {
  return (
    <div>
      <header className="bg-muted py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Bienvenido a MiTienda</h1>
          <p className="text-xl mb-8">
            La mejor plataforma para gestionar tu negocio online
          </p>
          <Link href="/products">
            <button className="btn btn-lg">
              Ir al Administrador de Productos
            </button>
          </Link>
        </div>
      </header>

      <main className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nuestras Características
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card">
              <h3 className="text-lg font-semibold">Gestión de Productos</h3>
              <p>
                Administra fácilmente tu inventario y catálogo de productos.
              </p>
            </div>
            <div className="card">
              <h3 className="text-lg font-semibold">Ventas Online</h3>
              <p>Procesa pedidos y gestiona tus ventas de forma eficiente.</p>
            </div>
            <div className="card">
              <h3 className="text-lg font-semibold">Gestión de Clientes</h3>
              <p>
                Mantén un registro detallado de tus clientes y sus preferencias.
              </p>
            </div>
            <div className="card">
              <h3 className="text-lg font-semibold">Análisis y Reportes</h3>
              <p>
                Obtén insights valiosos con nuestras herramientas de análisis.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
