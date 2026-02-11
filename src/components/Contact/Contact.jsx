import React, { useState } from 'react';

const Contact = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const contactMethods = [
    {
      id: 1,
      icon: '📧',
      title: 'Email',
      value: 'muhammadanaskhan0212@gmail.com',
      link: 'mailto:muhammadanaskhan0212@gmail.com',
      color: 'from-lime-400 to-lime-600',
      description: 'Drop me an email anytime',
    },
    {
      id: 2,
      icon: '📱',
      title: 'Phone',
      value: '+92 345 2206597',
      link: 'tel:+923452206597',
      color: 'from-fuchsia-400 to-fuchsia-600',
      description: 'Call me for quick chat',
    },
    {
      id: 3,
      icon: '📍',
      title: 'Location',
      value: 'Karachi, Pakistan',
      link: null,
      color: 'from-blue-400 to-blue-600',
      description: '',
    },
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: <i class="devicon-linkedin-plain colored"></i>, url: 'https://www.linkedin.com/in/muhammad-anas-khan-385146270', color: 'lime' },
    { name: 'GitHub', icon: <i class="devicon-github-plain colored"></i>, url: 'https://github.com/anaskhanmuhammad', color: 'fuchsia' },
    { name: 'LeetCode', icon: <i class="devicon-leetcode-plain colored"></i>, url: 'https://leetcode.com/u/muhammadanaskhan0212/', color: 'blue' },
    // { name: 'Twitter', icon: '🐦', url: 'https://twitter.com/muhammadanaskhan0212', color: 'blue' },
    // { name: 'Instagram', icon: '📸', url: 'https://instagram.com/muhammadanaskhan0212', color: 'lime' },
  ];

  return (
    <section className="relative min-h-screen w-full bg-gradient-to-br from-indigo-950 via-slate-950 to-slate-900 flex items-center justify-center py-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl top-10 right-10 animate-pulse-slow"></div>
        <div className="absolute w-96 h-96 bg-lime-400/10 rounded-full blur-3xl bottom-10 left-10 animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute w-96 h-96 bg-blue-400/10 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-slow animation-delay-4000"></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-fuchsia-400/40 rounded-full animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-fuchsia-500/10 to-lime-400/10 border border-fuchsia-400/30 backdrop-blur-sm">
            <span className="w-2 h-2 bg-fuchsia-400 rounded-full animate-pulse"></span>
            <p className="text-fuchsia-400 text-sm font-medium tracking-wide uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
              Let's Connect
            </p>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <span className="block bg-gradient-to-r from-fuchsia-400 via-lime-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
              Get In Touch
            </span>
          </h2>

          <p className="text-slate-300 text-lg max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Feel free to reach out through any of these channels. I'm always open to discussing new opportunities and collaborations!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Contact Cards */}
          <div className="space-y-6">
            {contactMethods.map((method, index) => (
              <div
                key={method.id}
                className="group relative"
                onMouseEnter={() => setHoveredCard(method.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${method.color} rounded-2xl blur opacity-0 group-hover:opacity-50 transition duration-500`}></div>
                
                {/* Card */}
                <div className={`relative p-6 bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 group-hover:border-transparent transition-all duration-300 ${
                  hoveredCard === method.id ? 'transform scale-105' : ''
                }`}>
                  <div className="flex items-center gap-4">
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center text-3xl shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300`}>
                      {method.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {method.title}
                      </h3>
                      <p className="text-slate-400 text-sm mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {method.description}
                      </p>
                      {method.link ? (
                        <a
                          href={method.link}
                          className={`text-sm font-semibold bg-gradient-to-r ${method.color} bg-clip-text text-transparent hover:underline`}
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                          {method.value}
                        </a>
                      ) : (
                        <p className={`text-sm font-semibold bg-gradient-to-r ${method.color} bg-clip-text text-transparent`} style={{ fontFamily: 'Inter, sans-serif' }}>
                          {method.value}
                        </p>
                      )}
                    </div>

                    {/* Arrow */}
                    {method.link && (
                      <svg className="w-6 h-6 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="pt-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <span className="w-1.5 h-1.5 bg-fuchsia-400 rounded-full"></span>
                Connect on Social Media
              </h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative px-6 py-3 bg-slate-900/50 backdrop-blur-xl rounded-full border border-slate-700/50 hover:border-${social.color}-400/50 transition-all duration-300 flex items-center gap-3 hover:scale-105`}
                  >
                    <span className="text-2xl transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                      {social.icon}
                    </span>
                    <span className="text-white font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Animated Illustration */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative group">
              {/* Multi-layer glow effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/30 via-lime-400/30 to-blue-400/30 blur-[100px] rounded-full scale-110 animate-pulse-slow"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-lime-400/20 to-fuchsia-500/20 blur-[80px] rounded-full scale-105 group-hover:scale-110 transition-transform duration-1000"></div>
              
              {/* Rotating ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-fuchsia-400/20 animate-spin-slow"></div>
              
              {/* Illustration */}
              <div className="relative z-10 p-8">
                <img
                  // src="https://illustrations.popsy.co/amber/message-sent.svg"
                  src="../../src/assets/Mention-amico.svg"
                  alt="Contact illustration"
                  className="relative w-full max-w-lg h-auto animate-float drop-shadow-2xl filter brightness-110 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Decorative orbs */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-fuchsia-400 to-lime-500 rounded-full blur-xl opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-fuchsia-500 rounded-full blur-xl opacity-60 animate-pulse animation-delay-2000"></div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-fuchsia-500 via-lime-400 to-blue-500 rounded-full blur opacity-40 group-hover:opacity-60 transition duration-500"></div>
            <div className="relative px-8 py-4 bg-slate-900/80 backdrop-blur-xl rounded-full border border-slate-700/50">
              <p className="text-slate-300 text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                <span className="text-fuchsia-400 font-semibold">Available</span> for freelance opportunities and collaborations
              </p>
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

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Contact;
