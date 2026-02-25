import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
               <span className="text-2xl font-bold text-white">Soft.Globizhub</span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Your central directory for enterprise-grade cloud solutions, innovative AI tools, and expert IT services.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Cloud Products</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/products/globiz-library" className="hover:text-indigo-400 transition">Globiz Library Platform</Link></li>
              <li><Link href="/products/saas-lims" className="hover:text-indigo-400 transition">SaaS LIMS</Link></li>
              <li><Link href="/products/Khaana " className="hover:text-indigo-400 transition">Khaana</Link></li>
              <li><Link href="/products/mapscraper" className="hover:text-indigo-400 transition">MapScraper</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">IT Services</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/services/web-development" className="hover:text-indigo-400 transition">Custom Web Apps</Link></li>
              <li><Link href="/services/cloud-infrastructure" className="hover:text-indigo-400 transition">Cloud Infrastructure</Link></li>
              <li><Link href="/projects" className="hover:text-indigo-400 transition">Client Case Studies</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/company/about" className="hover:text-indigo-400 transition">About Globizhub</Link></li>
              <li><Link href="/company/team" className="hover:text-indigo-400 transition">Meet the Team</Link></li>
              <li><Link href="/contact" className="hover:text-indigo-400 transition">Contact Us</Link></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© {new Date().getFullYear()} Globizhub India Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}