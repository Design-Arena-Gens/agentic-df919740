'use client';

import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');

  return (
    <main className="min-h-screen bg-void overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-prism-yellow to-prism-pink rounded-lg" />
              <span className="text-2xl font-bold tracking-tight">Prism</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-zinc-400 hover:text-white transition-colors text-sm">Features</a>
              <a href="#how" className="text-zinc-400 hover:text-white transition-colors text-sm">How It Works</a>
              <a href="#waitlist" className="text-zinc-400 hover:text-white transition-colors text-sm">Waitlist</a>
            </div>
            <button className="bg-prism-yellow text-void px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-opacity-90 transition-all">
              Join Beta
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-prism-cyan opacity-10 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-prism-pink opacity-10 blur-[120px] rounded-full animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
            <span className="w-2 h-2 bg-prism-cyan rounded-full animate-pulse" />
            <span className="text-zinc-400 text-sm">AI-Powered Photo Intelligence</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter text-balance">
            Your Photos,
            <br />
            <span className="bg-gradient-to-r from-prism-yellow via-prism-pink to-prism-cyan bg-clip-text text-transparent">
              Intelligently Shared
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Prism uses advanced AI to understand your photos, organize them perfectly, and share them with the right people at the right time.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-prism-yellow text-void px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform shadow-2xl shadow-prism-yellow/20">
              Get Early Access
            </button>
            <button className="glass px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all">
              Watch Demo
            </button>
          </div>

          {/* Hero Visual */}
          <div className="mt-20 relative">
            <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
              <div className="grid grid-cols-3 gap-4">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-xl bg-gradient-to-br from-surface to-zinc-900 animate-pulse"
                    style={{ animationDelay: `${i * 100}ms` }}
                  />
                ))}
              </div>
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-prism-cyan rounded-full animate-pulse" />
                  <span className="text-sm text-zinc-400">AI Processing...</span>
                </div>
                <span className="text-sm text-zinc-400">6,847 photos analyzed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Intelligence Built In
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Every feature designed to make photo sharing effortless and intelligent
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="glass rounded-2xl p-8 hover:bg-white/5 transition-all group">
              <div className="w-12 h-12 bg-prism-pink/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-prism-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Face Recognition</h3>
              <p className="text-zinc-400 leading-relaxed">
                Automatically identifies and tags people in your photos. Share albums with everyone who's in them, instantly.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="glass rounded-2xl p-8 hover:bg-white/5 transition-all group">
              <div className="w-12 h-12 bg-prism-cyan/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-prism-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Smart Collections</h3>
              <p className="text-zinc-400 leading-relaxed">
                AI organizes photos by events, locations, and moments. No manual sorting required, ever.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="glass rounded-2xl p-8 hover:bg-white/5 transition-all group">
              <div className="w-12 h-12 bg-prism-yellow/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-prism-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Privacy First</h3>
              <p className="text-zinc-400 leading-relaxed">
                End-to-end encryption. Your photos, your control. AI processing happens securely on-device.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Three Steps to Perfect Sharing
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: '01',
                title: 'Upload & Process',
                desc: 'Drop your photos. AI analyzes faces, locations, and contexts in seconds.',
                color: 'prism-cyan'
              },
              {
                step: '02',
                title: 'Auto-Organize',
                desc: 'Smart albums are created automatically. Events, people, places—all sorted.',
                color: 'prism-pink'
              },
              {
                step: '03',
                title: 'Smart Share',
                desc: 'Share with suggested contacts or create links. Privacy controls included.',
                color: 'prism-yellow'
              }
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className={`text-8xl font-bold text-${item.color}/10 mb-4`}>
                  {item.step}
                </div>
                <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                <p className="text-zinc-400 text-lg leading-relaxed">{item.desc}</p>
                {i < 2 && (
                  <div className="hidden md:block absolute top-12 -right-6 w-12 h-0.5 bg-gradient-to-r from-white/20 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="glass rounded-2xl p-12 text-center">
            <p className="text-zinc-400 mb-8 text-sm uppercase tracking-wider">Trusted by Early Adopters</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-40">
              {['TechCrunch', 'The Verge', 'Wired', 'Fast Co.'].map((brand, i) => (
                <div key={i} className="text-2xl font-bold tracking-tight">{brand}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist CTA */}
      <section id="waitlist" className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-prism-yellow/5 to-transparent" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Join the Future
          </h2>
          <p className="text-xl text-zinc-400 mb-12">
            Get early access to Prism. Limited spots available for beta testers.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 bg-surface border border-white/10 rounded-full px-6 py-4 text-white placeholder:text-zinc-500 focus:outline-none focus:border-prism-yellow transition-colors"
            />
            <button
              type="submit"
              className="bg-prism-yellow text-void px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform"
            >
              Join Waitlist
            </button>
          </form>

          <p className="text-sm text-zinc-500 mt-6">
            🔒 We respect your privacy. No spam, ever.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-prism-yellow to-prism-pink rounded-lg" />
              <span className="text-xl font-bold">Prism</span>
            </div>

            <div className="flex gap-8 text-sm text-zinc-400">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>

            <div className="flex gap-4">
              {['twitter', 'github', 'discord'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-all"
                  aria-label={social}
                >
                  <span className="text-zinc-400">◆</span>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-zinc-500">
            © 2024 Prism. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
