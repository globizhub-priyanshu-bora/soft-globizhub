import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/">
            <span className="text-2xl font-bold text-indigo-600">Soft.Globizhub</span>
          </Link>
        </div>
        <nav className="hidden md:flex gap-6 font-medium text-sm text-slate-600">
          <Link href="/products" className="hover:text-indigo-600 transition">Products</Link>
          <Link href="/projects" className="hover:text-indigo-600 transition">Client Portfolios</Link>
          <Link href="/services" className="hover:text-indigo-600 transition">IT Services</Link>
        </nav>
        <div>
          <button className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-indigo-700 transition shadow-sm">
            Start a Project
          </button>
        </div>
      </div>
    </header>
  );
}