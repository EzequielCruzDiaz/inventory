export const PageNoFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-700 text-center">
      <h1 className="text-9xl font-extrabold text-red-500 animate-bounce">
        404
      </h1>
      <p className="text-2xl mt-4 opacity-80">Página No Encontrada</p>
    </div>
  );
};
