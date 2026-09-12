import { Link } from 'react-router-dom';
import { Snowflake, Home, ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white pt-20 px-5">
      <div className="text-center max-w-md">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-cyan to-brand-cyan-dark shadow-brand mb-8 animate-bounce-subtle">
          <Snowflake className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-6xl sm:text-8xl font-bold text-brand-navy mb-2">404</h1>
        <h2 className="text-xl sm:text-2xl font-semibold text-brand-navy/70 mb-4">
          Page Not Found
        </h2>
        <p className="text-brand-navy/50 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-cyan to-brand-cyan-dark text-white font-semibold px-7 py-4 rounded-xl shadow-brand hover:shadow-lg hover:scale-[1.03] transition-all"
        >
          <Home className="w-5 h-5" />
          Back to Home
          <ArrowLeft className="w-4 h-4 rotate-180" />
        </Link>
      </div>
    </div>
  );
}
