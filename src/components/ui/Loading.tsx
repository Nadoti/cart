export function Loading ()  {
  return (
    <div className="flex flex-col items-center justify-center  absolute inset-0 bg-[rgba(0,0,0,0.4)]">
      <div className="border-t-4 border-b-4 border-primary rounded-full w-16 h-16 mr-3 animate-spin"></div>
      <span className="text-primary-foreground text-xl font-bold mt-2">Buscando...</span>
    </div>
  );
}

