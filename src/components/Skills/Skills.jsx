import React, { useState } from 'react';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    { name: 'JavaScript', level: 9, color: 'from-fuchsia-400 to-fuchsia-600', icon: <i className="devicon-javascript-plain colored text-4xl" />, },
    { name: 'Node.js', level: 80, color: 'from-fuchsia-400 to-fuchsia-600', icon: <i className="devicon-nodejs-plain colored text-4xl" />, },
    { name: 'React', level: 80, color: 'from-lime-400 to-lime-600', icon: <i className="devicon-react-plain colored text-4xl" />, },
    { name: 'Python', level: 70, color: 'from-lime-400 to-lime-600', icon: <i className="devicon-python-plain colored text-4xl" />, },
    { name: 'Git', level: 60, color: 'from-blue-400 to-blue-600', icon: <i className="devicon-git-plain colored text-4xl" />, },
    { name: 'C++', level: 70, color: 'from-blue-400 to-blue-600', icon: <i className="devicon-cplusplus-plain colored text-4xl" />, },
    { name: 'Tailwind', level: 60, color: 'from-fuchsia-400 to-fuchsia-600', icon: <i className="devicon-tailwindcss-plain colored text-4xl" />, },
    { name: 'SQL', level: 70, color: 'from-fuchsia-400 to-fuchsia-600', icon: <i className="devicon-azuresqldatabase-plain colored text-4xl" />, },
    { name: 'MongoDB', level: 60, color: 'from-fuchsia-400 to-fuchsia-600', icon: <i className="devicon-mongodb-plain colored text-4xl" />, },
    { name: 'Postman', level: 60, color: 'from-fuchsia-400 to-fuchsia-600', icon: <i className="devicon-postman-plain colored text-4xl" />, },

  ];

  return (
    <section className="relative min-h-screen w-full bg-gradient-to-br from-indigo-950 via-slate-950 to-slate-900 flex items-center justify-center py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-lime-400/10 rounded-full blur-3xl top-10 left-10 animate-pulse-slow"></div>
        <div className="absolute w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl bottom-10 right-10 animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute w-96 h-96 bg-blue-400/10 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-slow animation-delay-4000"></div>
      </div>

      {/* Grid pattern background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10 px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-lime-400/10 to-fuchsia-500/10 border border-lime-400/30 backdrop-blur-sm">
            <span className="w-2 h-2 bg-lime-400 rounded-full animate-pulse"></span>
            <p className="text-lime-400 text-sm font-medium tracking-wide uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
              My Expertise
            </p>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <span className="block bg-gradient-to-r from-lime-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
              Skills & Technologies
            </span>
          </h2>

          <p className="text-slate-300 text-lg max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            A showcase of the programming languages and technologies I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative"
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${skill.color} rounded-2xl blur opacity-0 group-hover:opacity-60 transition duration-500`}></div>
              
              {/* Card */}
              <div className={`relative h-full p-6 bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 group-hover:border-transparent transition-all duration-300 ${
                hoveredSkill === index ? 'transform -translate-y-2 scale-105' : ''
              }`}>
                {/* Icon */}
                <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                  {skill.icon}
                </div>

                {/* Skill Name */}
                <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {skill.name}
                </h3>

                {/* Proficiency Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-400" style={{ fontFamily: 'Inter, sans-serif' }}>Proficiency</span>
                    <span className={`text-xs font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`} style={{ fontFamily: 'Inter, sans-serif' }}>
                      {/* {skill.level}% */}
                    </span>
                  </div>
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{
                        width: hoveredSkill === index ? `${skill.level}%` : '0%'
                      }}
                    ></div>
                  </div>
                </div>

                {/* Decorative corner accent */}
                <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${skill.color} opacity-10 rounded-bl-full rounded-tr-2xl`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decorative text */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
            Hover over each skill to see proficiency level
          </p>
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

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Skills;
