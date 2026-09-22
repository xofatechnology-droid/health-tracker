import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      
      {/* Neumorphic Hero Card */}
      <div className="w-full max-w-md p-10 rounded-3xl shadow-neu-flat bg-softBg space-y-6">
        <h1 className="text-4xl font-bold text-slate-700 tracking-tight">
          Aura Tracker
        </h1>
        <p className="text-slate-500 font-medium pb-4">
          A tactile, low-friction daily health log.
        </p>
        
        {/* Neumorphic Link Button */}
        <Link
          href="/log"
          className="block w-full py-4 rounded-2xl font-bold text-lg shadow-neu-flat active:shadow-neu-pressed transition-all duration-150 text-slate-600 active:text-blue-500"
        >
          Open Dashboard
        </Link>
      </div>

    </div>
  );
}