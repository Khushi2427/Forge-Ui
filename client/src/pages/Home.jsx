import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [glowingText, setGlowingText] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    // Trigger glow effect periodically
    const interval = setInterval(() => {
      setGlowingText(true);
      setTimeout(() => setGlowingText(false), 1500);
    }, 4000);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-indigo-950 text-white overflow-hidden relative">
      
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none" />
      
      {/* Animated glowing orbs */}
      <div className="absolute top-20 -left-20 w-80 h-80 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-40 -right-20 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      
      {/* Interactive cursor glow */}
      <div 
        className="fixed w-64 h-64 bg-indigo-500 rounded-full filter blur-3xl opacity-10 pointer-events-none transition-transform duration-300 z-50"
        style={{
          transform: `translate(${cursorPosition.x - 128}px, ${cursorPosition.y - 128}px)`,
        }}
      />

      {/* Navbar with glass morphism */}
      <nav className="relative z-50 flex justify-between items-center px-8 py-5 backdrop-blur-md bg-gray-950/30 border-b border-gray-800/50 sticky top-0">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center animate-pulse">
            <span className="text-2xl font-bold">⚡</span>
          </div>
          <h1 className={`text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-300 ${glowingText ? 'drop-shadow-[0_0_15px_rgba(99,102,241,0.7)]' : ''}`}>
            ForgeUI
          </h1>
        </div>
        
        <div className="flex items-center space-x-6">
          <a href="#features" className="text-gray-300 hover:text-white transition-colors relative group">
            Features
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-300" />
          </a>
          <div className="flex space-x-3">
            <Link
              to="/workspace"
              className="relative group px-4 py-2 rounded-lg font-medium overflow-hidden border border-indigo-500/50"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 group-hover:from-indigo-600/40 group-hover:to-purple-600/40 transition-all duration-300" />
              <span className="relative flex items-center space-x-2">
                <span className="text-sm">Deterministic</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </Link>
            <Link
              to="/workspace-dynamic"
              className="relative group px-4 py-2 rounded-lg font-medium overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg shadow-indigo-500/25"
            >
              <span className="absolute inset-0 bg-[url('data:image/svg+xml,...')] opacity-0 group-hover:opacity-20 transition-opacity" />
              <span className="relative flex items-center space-x-2">
                <span className="text-sm">Dynamic</span>
                <span className="group-hover:translate-x-1 transition-transform">✨</span>
              </span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section with particle effect */}
      <section className="relative text-center py-28 px-6">
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-indigo-400/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="inline-block px-4 py-2 bg-indigo-500/10 backdrop-blur-sm rounded-full border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-8 animate-fade-in-down">
            🚀 Deterministic & Dynamic AI UI Generation
          </div>
          
          <h2 className={`text-6xl md:text-7xl font-bold mb-8 leading-tight transition-all duration-700 ${glowingText ? 'scale-105' : ''}`}>
            <span className="bg-gradient-to-r from-white via-indigo-300 to-purple-300 bg-clip-text text-transparent animate-gradient">
              Build UIs with
            </span>
            <br />
            <span className="relative">
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI-Powered Precision
              </span>
              <span className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-width" />
            </span>
          </h2>
          
          <p className="text-gray-400 max-w-3xl mx-auto text-xl leading-relaxed mb-12 animate-fade-in-up">
            Choose between <span className="text-indigo-400 font-semibold">deterministic</span> (fixed components) or{" "}
            <span className="text-purple-400 font-semibold">dynamic</span> (flexible styling) UI generation. 
            Both are safe, controlled, and explainable.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Link
              to="/workspace"
              className="group relative inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-700 hover:to-indigo-600 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] min-w-[220px] justify-center"
            >
              <span>Deterministic Mode</span>
              <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              <span className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>

            <Link
              to="/workspace-dynamic"
              className="group relative inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] min-w-[220px] justify-center"
            >
              <span>Dynamic Mode</span>
              <span className="group-hover:translate-x-2 transition-transform duration-300">✨</span>
              <span className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>

          <div className="flex justify-center space-x-8 text-sm text-gray-500 animate-fade-in">
            <span className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>Multi-Step AI</span>
            </span>
            <span className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              <span>Deterministic</span>
            </span>
            <span className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
              <span>Dynamic</span>
            </span>
            <span className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" />
              <span>Versioned</span>
            </span>
          </div>
        </div>
      </section>

      {/* Features Section with Interactive Cards */}
      <section id="features" className="relative px-8 py-28 bg-gradient-to-b from-gray-900/50 via-gray-900 to-gray-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.15),transparent_50%)] pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-indigo-400 font-semibold text-sm uppercase tracking-wider">
              Two Powerful Modes
            </span>
            <h3 className="text-4xl md:text-5xl font-bold mt-4 mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Choose Your Development Style
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Whether you need strict component control or creative freedom, ForgeUI has you covered
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {/* Deterministic Mode Card */}
            <div className="group relative opacity-0 animate-fade-in-up">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/30 to-blue-500/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative bg-gray-800/90 backdrop-blur-sm p-8 rounded-2xl border border-indigo-500/30 hover:border-transparent transition-all duration-500 transform group-hover:-translate-y-2">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-5xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    🎯
                  </div>
                  <span className="px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm font-medium">Deterministic</span>
                </div>
                <h4 className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
                  Fixed Component System
                </h4>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start space-x-2">
                    <span className="text-indigo-400 mt-1">✓</span>
                    <span>Pre-built system components (Button, Card, Modal, etc.)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-indigo-400 mt-1">✓</span>
                    <span>No arbitrary styling - consistent design system</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-indigo-400 mt-1">✓</span>
                    <span>Perfect for enterprise applications</span>
                  </li>
                </ul>
                <Link
                  to="/workspace"
                  className="mt-6 inline-flex items-center space-x-2 text-indigo-400 hover:text-indigo-300 transition-colors group/link"
                >
                  <span>Try Deterministic Mode</span>
                  <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>

            {/* Dynamic Mode Card */}
            <div className="group relative opacity-0 animate-fade-in-up animation-delay-200">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative bg-gray-800/90 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/30 hover:border-transparent transition-all duration-500 transform group-hover:-translate-y-2">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-5xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    ✨
                  </div>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium">Dynamic</span>
                </div>
                <h4 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Flexible Styling System
                </h4>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start space-x-2">
                    <span className="text-purple-400 mt-1">✓</span>
                    <span>Generate custom styles with Tailwind CSS</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-purple-400 mt-1">✓</span>
                    <span>Creative freedom with safety guardrails</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-purple-400 mt-1">✓</span>
                    <span>Perfect for prototypes and unique designs</span>
                  </li>
                </ul>
                <Link
                  to="/workspace-dynamic"
                  className="mt-6 inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors group/link"
                >
                  <span>Try Dynamic Mode</span>
                  <span className="group-hover/link:translate-x-1 transition-transform">✨</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon="🧠"
              title="Multi-Step AI Agent"
              description="Planner → Generator → Explainer architecture ensures structured reasoning instead of a single LLM call."
              gradient="from-blue-500/20 to-cyan-500/20"
              delay={0}
            />
            <FeatureCard
              icon="🔄"
              title="Iterative Modifications"
              description="Modify existing UI without rewriting everything. Incremental edits with version history."
              gradient="from-green-500/20 to-emerald-500/20"
              delay={100}
            />
            <FeatureCard
              icon="👁️"
              title="Live Preview + Editable Code"
              description="View generated React code, edit it manually, and see instant live rendering."
              gradient="from-orange-500/20 to-red-500/20"
              delay={200}
            />
            <FeatureCard
              icon="⏪"
              title="Rollback & Versioning"
              description="Move between previous UI states safely and transparently with full history tracking."
              gradient="from-indigo-500/20 to-blue-500/20"
              delay={300}
            />
            <FeatureCard
              icon="🛡️"
              title="Safety & Validation"
              description="Component whitelist enforcement, injection protection, and validation before rendering."
              gradient="from-red-500/20 to-pink-500/20"
              delay={400}
            />
            <FeatureCard
              icon="🎨"
              title="Dual Mode Support"
              description="Switch between deterministic and dynamic modes based on your project needs."
              gradient="from-purple-500/20 to-pink-500/20"
              delay={500}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-pink-600/20 animate-pulse-slow" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h3 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Transform Your
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block mt-2">
              UI Development Workflow?
            </span>
          </h3>
          
          <p className="text-gray-400 text-xl mb-12">
            Join developers who are building better UIs with AI-powered precision
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/workspace"
              className="group relative inline-flex items-center space-x-3 px-10 py-5 bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-2xl text-xl font-bold transform hover:scale-110 transition-all duration-500 hover:shadow-[0_0_40px_rgba(99,102,241,0.6)]"
            >
              <span>Deterministic Mode</span>
              <span className="group-hover:translate-x-2 transition-transform">→</span>
            </Link>
            <Link
              to="/workspace-dynamic"
              className="group relative inline-flex items-center space-x-3 px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl text-xl font-bold transform hover:scale-110 transition-all duration-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.6)]"
            >
              <span>Dynamic Mode</span>
              <span className="group-hover:translate-x-2 transition-transform">✨</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer with animated elements */}
      <footer className="relative border-t border-gray-800/50 backdrop-blur-sm bg-gray-950/50">
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <span className="text-xl font-semibold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                ForgeUI
              </span>
            </div>
            
            <p className="text-gray-500 flex items-center space-x-2">
              <span>Built with</span>
              <span className="text-red-500 animate-heartbeat">❤️</span>
              <span>by</span>
              <a href="#" className="text-indigo-400 hover:text-indigo-300 transition-colors relative group">
                Khushi Gupta
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-300" />
              </a>
              <span>· ForgeUI</span>
            </p>
            
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="https://github.com/Khushi2427" className="text-gray-500 hover:text-white transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description, gradient, delay = 0 }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated gradient border */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${gradient} rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500 group-hover:duration-200`} />
      
      {/* Card content */}
      <div className="relative bg-gray-800/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-transparent transition-all duration-500 transform group-hover:-translate-y-2">
        {/* Icon with animation */}
        <div className="text-4xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
          {icon}
        </div>
        
        <h4 className="text-xl font-semibold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent group-hover:from-indigo-300 group-hover:to-purple-300 transition-all duration-300">
          {title}
        </h4>
        
        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
          {description}
        </p>

        {/* Hover effect indicator */}
        <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg className="w-5 h-5 text-indigo-400 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// Add these styles to your global CSS or Tailwind config
const styles = `
  @keyframes blob {
    0% { transform: translate(0px, 0px) scale(1); }
    33% { transform: translate(30px, -50px) scale(1.1); }
    66% { transform: translate(-20px, 20px) scale(0.9); }
    100% { transform: translate(0px, 0px) scale(1); }
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px) translateX(0px); }
    50% { transform: translateY(-20px) translateX(10px); }
  }
  
  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  .animate-blob {
    animation: blob 7s infinite;
  }
  
  .animate-float {
    animation: float 5s infinite ease-in-out;
  }
  
  .animate-gradient {
    background-size: 200% 200%;
    animation: gradient 3s ease infinite;
  }
  
  .animation-delay-2000 {
    animation-delay: 2s;
  }
  
  .animation-delay-4000 {
    animation-delay: 4s;
  }
  
  .animate-heartbeat {
    animation: heartbeat 1.5s ease-in-out infinite;
  }
  
  @keyframes heartbeat {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }
  
  .animate-width {
    width: 0%;
    animation: width 1.5s ease-out forwards;
  }
  
  @keyframes width {
    from { width: 0%; }
    to { width: 100%; }
  }
  
  .animate-fade-in-down {
    animation: fadeInDown 0.8s ease-out;
  }
  
  .animate-fade-in-up {
    animation: fadeInUp 0.8s ease-out;
  }
  
  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-pulse-slow {
    animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
`;

// Inject styles
const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);