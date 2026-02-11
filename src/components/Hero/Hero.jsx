import React from 'react';

const Hero = () => {
  const heroCharacter = "https://illustrations.popsy.co/amber/remote-work.svg";
  
  return (
    <section className="relative min-h-screen w-full bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 flex items-center justify-center py-20 overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      
      {/* Gen Z gradient orbs with vibrant colors */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-lime-400/20 rounded-full blur-[120px] -top-48 -left-48 animate-pulse-slow"></div>
        <div className="absolute w-[500px] h-[500px] bg-fuchsia-500/20 rounded-full blur-[120px] -bottom-48 -right-48 animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute w-[300px] h-[300px] bg-blue-400/15 rounded-full blur-[100px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-slow animation-delay-4000"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-lime-400/40 rounded-full animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10 px-6">
        {/* Left Content */}
        <div className="space-y-8 text-white">
          {/* Greeting with Gen Z styling */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-lime-400/10 to-fuchsia-500/10 border border-lime-400/30 backdrop-blur-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-lime-400"></span>
              </span>
              <p className="text-lime-400 text-sm font-medium tracking-wide">
                Available for opportunities
              </p>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black leading-tight">
              <span className="block bg-gradient-to-r from-white via-lime-200 to-white bg-clip-text text-transparent animate-gradient-x">
                Hi, I'm
              </span>
              <span className="block mt-2 bg-gradient-to-r from-lime-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
                Muhammad Anas Khan
              </span>
            </h1>
          </div>

          {/* Tagline with Gen Z glassmorphism */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-lime-400 to-fuchsia-500 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative px-6 py-4 bg-slate-900/50 backdrop-blur-xl rounded-lg border border-lime-400/20">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-100">
                Crafting Digital Experiences
              </h2>
              <p className="text-lg text-fuchsia-300 font-medium italic mt-2">
                "Code is poetry, design is art, innovation is my canvas"
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
            Full-stack developer passionate about building elegant solutions to complex problems. 
            Turning ideas into reality, one line of code at a time.
          </p>

          {/* CTA Buttons with Gen Z colors */}
          <div className="flex flex-wrap items-center gap-6 pt-4">
            {/* Resume Download Button - Gen Z gradient */}
            <a
              href="/resume.pdf"
              download
              className="group relative px-8 py-4 bg-gradient-to-r from-lime-400 via-fuchsia-500 to-blue-500 rounded-full font-bold text-slate-900 shadow-2xl shadow-fuchsia-500/50 hover:shadow-fuchsia-500/80 hover:scale-105 transition-all duration-300 flex items-center gap-3 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-fuchsia-500 to-lime-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <svg className="w-5 h-5 relative z-10 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="relative z-10">Download Resume</span>
            </a>

            {/* Social Links - Gen Z colors */}
            <div className="flex items-center gap-4">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/muhammad-anas-khan-385146270"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-14 h-14 rounded-full bg-slate-800/30 backdrop-blur-md border border-slate-600/50 flex items-center justify-center text-lime-400 hover:text-slate-900 hover:border-lime-400 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-lime-500/50 overflow-hidden"
                aria-label="LinkedIn"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-lime-400 to-lime-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <svg className="w-6 h-6 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/anaskhanmuhammad"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-14 h-14 rounded-full bg-slate-800/30 backdrop-blur-md border border-slate-600/50 flex items-center justify-center text-fuchsia-400 hover:text-slate-900 hover:border-fuchsia-400 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-fuchsia-500/50 overflow-hidden"
                aria-label="GitHub"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-400 to-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <svg className="w-6 h-6 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>

              {/* LeetCode */}
              <a
                href="https://leetcode.com/u/muhammadanaskhan0212/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-14 h-14 rounded-full bg-slate-800/30 backdrop-blur-md border border-slate-600/50 flex items-center justify-center text-blue-400 hover:text-slate-900 hover:border-blue-400 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 overflow-hidden"
                aria-label="LeetCode"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <svg className="w-6 h-6 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right Content - Character Image with Gen Z effects */}
        <div className="relative flex items-center justify-center lg:justify-end">
          <div className="relative group">
            {/* Gen Z multi-color glow effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-lime-400/40 via-fuchsia-500/40 to-blue-400/40 blur-[100px] rounded-full scale-110 animate-pulse-slow"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/30 to-lime-400/30 blur-[80px] rounded-full scale-105 group-hover:scale-110 transition-transform duration-1000"></div>
            
            {/* Rotating ring with Gen Z color */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-lime-400/20 animate-spin-slow"></div>
            
            {/* Character Image */}
            <div className="relative z-10 p-8">
              <img
                src={heroCharacter}
                alt="Developer coding illustration"
                className="relative w-full max-w-lg h-auto animate-float drop-shadow-2xl filter brightness-110 contrast-110 group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Gen Z decorative orbs */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-lime-400 to-fuchsia-500 rounded-full blur-xl opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-fuchsia-500 rounded-full blur-xl opacity-60 animate-pulse animation-delay-2000"></div>
          </div>
        </div>
      </div>

      {/* Enhanced custom animations */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes float-particle {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(50px);
            opacity: 0;
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-particle {
          animation: float-particle linear infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Hero;
