import React from 'react';

const Experience = () => {
  // Sample experience data - USER SHOULD UPDATE WITH ACTUAL EXPERIENCE
  const experiences = [
    {
      id: 1,
      role: 'MERN Stack Developer Intern',
      company: 'NCL',
      duration: 'Oct 2024 - Feb 2025',
      location: 'Karachi',
      description: 'Worked on developing and maintaining web applications using MERN Stack.',
      responsibilities: [
        'Developed responsive web interfaces using React',
        'Worked on charts and graphs using Chart.js',

      ],
      techStack: ['React', 'Node.js', 'Express.js', 'Chart.js'],
      icon: '💼',
    },
        {
      id: 2,
      role: 'IT Intern',
      company: 'KDA',
      duration: 'March 2025 - April 2025',
      location: 'Karachi',
      description: 'Learned about the data storage infrastructure and how to use it effectively.',
      responsibilities: [
        'Learned about the data storage infrastructure and how to use it effectively.',
      ],
      techStack: [],
      icon: '💼',
    },
  ];

  return (
    <section className="relative min-h-screen w-full bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 flex items-center justify-center py-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-lime-400/10 rounded-full blur-3xl top-20 left-20 animate-pulse-slow"></div>
        <div className="absolute w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl bottom-20 right-20 animate-pulse-slow animation-delay-2000"></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      <div className="max-w-5xl mx-auto w-full relative z-10 px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-lime-400/10 to-fuchsia-500/10 border border-lime-400/30 backdrop-blur-sm">
            <span className="w-2 h-2 bg-lime-400 rounded-full animate-pulse"></span>
            <p className="text-lime-400 text-sm font-medium tracking-wide uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
              Career Journey
            </p>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <span className="block bg-gradient-to-r from-lime-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
              Experience
            </span>
          </h2>

          <p className="text-slate-300 text-lg max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            My professional journey and key achievements
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-lime-400 via-fuchsia-500 to-blue-400 opacity-30 transform md:-translate-x-1/2"></div>

          {/* Experience items */}
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`relative mb-12 last:mb-0 md:flex ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-lime-400 to-fuchsia-500 animate-pulse-slow z-10 shadow-lg shadow-fuchsia-500/50 mt-8"></div>
              
              {/* Outer glow ring */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-8 h-8 -ml-2 rounded-full bg-fuchsia-500/20 animate-ping mt-6"></div>

              {/* Experience card */}
              <div className={`ml-20 md:ml-0 md:w-[calc(50%-3rem)] ${index % 2 === 0 ? 'md:mr-auto md:pr-4' : 'md:ml-auto md:pl-4'}`}>
                <div className="group relative">
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-lime-400 via-fuchsia-500 to-blue-400 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                  
                  {/* Card */}
                  <div className="relative bg-slate-900/50 backdrop-blur-xl rounded-3xl border border-slate-700/50 p-8 group-hover:border-transparent transition-all duration-300">
                    {/* Icon */}
                    <div className="absolute -left-4 top-8 w-12 h-12 bg-gradient-to-br from-lime-400 to-fuchsia-500 rounded-xl flex items-center justify-center text-2xl shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                      {exp.icon}
                    </div>

                    {/* Duration badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-gradient-to-r from-fuchsia-500/20 to-lime-400/20 border border-fuchsia-400/30">
                      <svg className="w-4 h-4 text-fuchsia-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-fuchsia-400 text-sm font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {exp.duration}
                      </span>
                    </div>

                    {/* Role */}
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {exp.role}
                    </h3>

                    {/* Company & Location */}
                    <div className="flex items-center gap-4 mb-4 text-slate-300">
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <span className="font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span style={{ fontFamily: 'Inter, sans-serif' }}>{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 leading-relaxed mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {exp.description}
                    </p>

                    {/* Responsibilities */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        <span className="w-1.5 h-1.5 bg-lime-400 rounded-full"></span>
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-slate-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                            <svg className="w-5 h-5 text-fuchsia-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-slate-800/50 backdrop-blur-sm rounded-full text-xs font-medium text-blue-400 border border-blue-400/30"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Decorative corner */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-fuchsia-500/10 to-transparent rounded-bl-full rounded-tr-3xl"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
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

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default Experience;
