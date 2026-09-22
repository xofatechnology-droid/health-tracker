import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full p-6 flex justify-between items-center max-w-4xl mx-auto mb-4">
      <Link href="/" className="text-2xl font-bold text-slate-700 tracking-tight">
        Aura
      </Link>
      <div className="flex gap-4">
        <Link 
          href="/login" 
          className="px-6 py-2 rounded-xl text-sm font-semibold shadow-neu-flat active:shadow-neu-pressed transition-all text-slate-600 active:text-blue-500"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}