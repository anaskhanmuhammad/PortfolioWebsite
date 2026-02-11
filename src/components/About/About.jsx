import React from 'react';

const About = () => {
  const aboutIllustration = "https://illustrations.popsy.co/amber/web-design.svg";
  
  return (
    <section className="relative min-h-screen w-full bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950 flex items-center justify-center py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl top-20 right-20 animate-pulse-slow"></div>
        <div className="absolute w-96 h-96 bg-lime-400/10 rounded-full blur-3xl bottom-20 left-20 animate-pulse-slow animation-delay-2000"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-fuchsia-400/30 rounded-full animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10 px-6">
        {/* Left Content - Animated Illustration */}
        <div className="relative flex items-center justify-center lg:justify-start order-2 lg:order-1">
          <div className="relative group">
            {/* Multi-layer glow effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/30 via-lime-400/30 to-blue-400/30 blur-[100px] rounded-full scale-110 animate-pulse-slow"></div>
            
            {/* Rotating decorative ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-fuchsia-400/20 animate-spin-slow"></div>
            
            {/* Illustration */}
            <div className="relative z-10 p-8">
              <img
                src={aboutIllustration}
                alt="Creative illustration"
                className="relative w-full max-w-md h-auto animate-float drop-shadow-2xl filter brightness-110 group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Decorative orbs */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-lime-400 to-fuchsia-500 rounded-full blur-xl opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-400 to-fuchsia-500 rounded-full blur-xl opacity-60 animate-pulse animation-delay-2000"></div>
          </div>
        </div>

        {/* Right Content - Text */}
        <div className="space-y-8 text-white order-1 lg:order-2">
          {/* Section Label */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-fuchsia-500/10 to-lime-400/10 border border-fuchsia-400/30 backdrop-blur-sm">
            <span className="w-2 h-2 bg-fuchsia-400 rounded-full animate-pulse"></span>
            <p className="text-fuchsia-400 text-sm font-medium tracking-wide uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
              Get to know me
            </p>
          </div>

          {/* Title with premium font and gradient */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <span className="block bg-gradient-to-r from-lime-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
              About Me
            </span>
          </h2>

          {/* About paragraph in glassmorphism card */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-500 to-lime-400 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
            <div className="relative px-8 py-8 bg-slate-900/40 backdrop-blur-xl rounded-2xl border border-fuchsia-400/20 shadow-2xl">
              {/* <p className="text-slate-200 text-lg md:text-xl leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                I'm a passionate <span className="text-lime-400 font-semibold">full-stack developer</span> who 
                loves turning complex problems into elegant, user-friendly solutions. With a keen eye for 
                design and a deep understanding of modern technologies, I craft digital experiences that 
                not only look stunning but also deliver exceptional performance.
              </p> */}
              <p className="text-slate-200 text-lg md:text-xl leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                I’m a <span className="text-lime-400 font-semibold">Software Engineering </span> student and a passionate <span className="text-fuchsia-400 font-semibold">full-stack developer</span> specializing in the <span className="text-blue-400 font-semibold">MERN stack</span>. I enjoy transforming complex problems into clean, scalable, and user-friendly solutions with a strong focus on performance and design.
              </p>
              <p className="text-slate-300 text-lg md:text-xl leading-relaxed mt-6" style={{ fontFamily: 'Inter, sans-serif' }}>
Currently, I’m expanding my skill set by diving deeper into <span className="text-lime-400 font-semibold">Next.js</span> to build faster, and production-ready web applications. When I’m not coding, I explore emerging technologies, and continuously push myself to grow as a developer.
              </p>
            </div>
          </div>

          {/* Stats or highlights */}
          <div className="grid grid-cols-3 gap-6 pt-4">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-lime-400/20 to-transparent rounded-xl blur"></div>
              <div className="relative p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-lime-400/30 text-center hover:scale-105 transition-transform duration-300">
                <p className="text-3xl font-bold text-lime-400" style={{ fontFamily: 'Poppins, sans-serif' }}>3+</p>
                <p className="text-sm text-slate-400 mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>Years of Development Experience</p>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-400/20 to-transparent rounded-xl blur"></div>
              <div className="relative p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-fuchsia-400/30 text-center hover:scale-105 transition-transform duration-300">
                <p className="text-3xl font-bold text-fuchsia-400" style={{ fontFamily: 'Poppins, sans-serif' }}>10+</p>
                <p className="text-sm text-slate-400 mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>Projects Completed as a Developer</p>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent rounded-xl blur"></div>
              <div className="relative p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-blue-400/30 text-center hover:scale-105 transition-transform duration-300">
                <p className="text-3xl font-bold text-blue-400" style={{ fontFamily: 'Poppins, sans-serif' }}>100%</p>
                <p className="text-sm text-slate-400 mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>Dedication</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom animations */}
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
            transform: translateY(-20px) rotate(3deg);
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
            transform: translateY(-100vh) translateX(30px);
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
      `}</style>
    </section>
  );
};

export default About;
