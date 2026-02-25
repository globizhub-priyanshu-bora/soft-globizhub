import React from 'react';
import Link from 'next/link';

// Mock Data for the Directory (To be moved to PostgreSQL/Prisma later)
const FEATURED_PRODUCTS = [
  {
    id: '1',
    name: 'Globiz Library',
    tagline: 'Unified operations platform for service-based businesses.',
    status: 'Live',
    tech: ['Next.js', 'Prisma', 'PostgreSQL'],
    icon: '🏢',
    link: '/products/globiz-library'
  },
  {
    id: '2',
    name: 'Khaana',
    tagline: 'Food delivery app with AI-powered recommendations.',
    status: 'Beta',
    tech: ['AI', 'React', 'Python'],
    icon: '🍰',
    link: '/products/Khaana '
  },
  {
    id: '3',
    name: 'SaaS LIMS',
    tagline: 'Next-generation Laboratory Information Management System.',
    status: 'In Development',
    tech: ['TypeScript', 'Tailwind', 'PostgreSQL'],
    icon: '🔬',
    link: '/products/saas-lims'
  },
  {
    id: '4',
    name: 'MapScraper',
    tagline: 'Automated web scraping and data extraction tool.',
    status: 'Internal Tool',
    tech: ['React', 'Next.js', 'Node.js'],
    icon: '🔄',
    link: '/products/MapScraper'
  }
];

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      
      {/* The "Softonic" Hero Section */}
      <section className="pt-10 pb-10 px-4 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
          Discover Globizhub's <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">
            Cloud Ecosystem
          </span>
        </h1>
        <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
          Explore our proprietary SaaS platforms, AI automation tools, and award-winning digital solutions built for modern enterprises.
        </p>

        {/* Master Search Bar */}
        <div className="relative max-w-xl mx-auto shadow-xl rounded-full bg-white flex items-center p-2 border border-slate-200">
          <svg className="w-6 h-6 text-slate-400 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input 
            type="text" 
            placeholder="Search apps, IT services, or case studies..." 
            className="w-full bg-transparent border-none focus:ring-0 px-4 text-slate-800 placeholder-slate-400 outline-none"
          />
          <button className="bg-slate-900 text-white px-6 py-3 rounded-full font-medium hover:bg-slate-800 transition">
            Search
          </button>
        </div>

        {/* Quick Filters */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {['SaaS Platforms', 'AI Automation', 'Legal Tech', 'Data Pipelines'].map((tag) => (
            <span key={tag} className="px-4 py-1.5 rounded-full bg-white border border-slate-200 text-sm font-medium text-slate-600 cursor-pointer hover:border-indigo-300 hover:text-indigo-600 transition shadow-sm">
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* Featured Products Grid */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Our Flagship Products</h2>
              <p className="text-slate-500 mt-2">Enterprise-grade applications built by our expert team.</p>
            </div>
            <Link href="/products" className="text-indigo-600 font-semibold hover:underline hidden sm:block">
              View Directory &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {FEATURED_PRODUCTS.map((product) => (
              <Link href={product.link} key={product.id} className="group flex flex-col sm:flex-row bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:border-indigo-200 transition duration-300">
                <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6 text-5xl bg-white w-20 h-20 flex items-center justify-center rounded-xl shadow-sm border border-slate-100">
                  {product.icon}
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition">{product.name}</h3>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-indigo-100 text-indigo-700 rounded-full">
                      {product.status}
                    </span>
                  </div>
                  <p className="text-slate-600 mt-2 text-sm leading-relaxed">
                    {product.tagline}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {product.tech.map(tech => (
                      <span key={tech} className="text-xs font-medium text-slate-500 bg-white border border-slate-200 px-2 py-1 rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}