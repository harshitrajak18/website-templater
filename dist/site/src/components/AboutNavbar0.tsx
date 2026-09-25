import { useState } from "react";

export function AboutNavbar0() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <span className="text-xl font-bold text-slate-900">Acme</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex md:items-center md:gap-8">
              <a href="/" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Home</a>
              <a href="/about/" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">About</a>
              <a href="/pricing/" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Pricing</a>
              <a href="/contact/" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Contact</a>
              <a href="/SignIn/" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Sign In</a>
            <a href="/contact/" className="rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all">Get Started</a>
        </nav>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700">
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pb-6 pt-4">
          <div className="space-y-4">
                <a href="/" className="block text-base font-medium text-slate-900 hover:text-indigo-600">Home</a>
                <a href="/about/" className="block text-base font-medium text-slate-900 hover:text-indigo-600">About</a>
                <a href="/pricing/" className="block text-base font-medium text-slate-900 hover:text-indigo-600">Pricing</a>
                <a href="/contact/" className="block text-base font-medium text-slate-900 hover:text-indigo-600">Contact</a>
                <a href="/SignIn/" className="block text-base font-medium text-slate-900 hover:text-indigo-600">Sign In</a>
              <a href="/contact/" className="mt-4 block w-full rounded-md bg-indigo-600 px-3 py-3 text-center text-base font-semibold text-white shadow-sm hover:bg-indigo-500">Get Started</a>
          </div>
        </div>
      )}
    </header>
  );
}
