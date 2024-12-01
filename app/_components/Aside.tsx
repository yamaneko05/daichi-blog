export async function Aside({ children }: { children: React.ReactNode }) {
  return (
    <div className="top-20 hidden w-72 p-3 sm:sticky sm:block sm:h-screen">
      {children}
    </div>
  );
}
