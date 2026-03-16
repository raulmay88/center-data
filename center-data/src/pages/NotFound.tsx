import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

export const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">

      <AlertTriangle size={60} className="text-blue-600 mb-6" />

      <h1 className="text-5xl font-bold mb-4">
        404
      </h1>

      <h2 className="text-2xl font-semibold mb-4">
        Página no encontrada
      </h2>

      <p className="text-gray-600 max-w-md mb-8">
        Lo sentimos, la página que estás buscando no existe
        o fue movida a otra ubicación.
      </p>

      <Link
        to="/"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Volver al inicio
      </Link>

    </div>
  );
};