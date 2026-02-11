import React, { useState } from 'react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  // Sample project data - USER SHOULD REPLACE WITH ACTUAL PROJECTS
  const projects = [
    {
      id: 1,
      title: 'Talkify',
      description: 'Talkify is a real-time chat application developed using the MERN stack (MongoDB, Express.js, React, Node.js) with Socket.io for instant messaging. It features a complete user authentication system with avatar selection, real-time message delivery, message deletion, and online user status indicators. The application is styled using Tailwind CSS, providing a clean, modern, and responsive user interface. This project showcases full-stack development, real-time communication handling, and scalable application design.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
      thumbnail: '../../src/assets/Talkify.jpeg',
      media: [
        { type: 'image', url: '../../src/assets/Talkify.jpeg' },
        // { type: 'image', url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop' },
        // { type: 'image', url: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop' },
      ],
      githubLink: 'https://github.com/anaskhanmuhammad/Talkify',
      liveLink: '',
    },
    {
      id: 2,
      title: 'TechPrep Hub',
      description: 'TechPrep Hub is an interactive web platform built using the MERN stack (MongoDB, Express.js, React, Node.js) with ShadCN UI, developed during a hackathon as a team project. The platform allows users to explore and practice tech interview questions through a clean and intuitive interface. Authenticated users can upload their own question collections, choose to keep them public or private, and download collections in text format. This project highlights collaborative development, frontend-focused UI design, and user-driven content management.',
      techStack: ['React', 'Node.js', 'MongoDB', 'ShadCN UI'],
      thumbnail: '../../src/assets/Techprephub.png',
      media: [
        { type: 'image', url: '../../src/assets/Techprephub.png' },
        // { type: 'image', url: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1200&h=800&fit=crop' },
      ],
      githubLink: 'https://github.com/anaskhanmuhammad/IBA-Hackathon',
      liveLink: '',
    },
    {
      id: 3,
      title: 'Zentron',
      description: 'Zentron is a secure transaction platform developed as a team project using Geth, Solidity, Web3.js, Node.js, Express.js, and React. The system integrates blockchain technology with a verification layer to validate financial transactions before execution. Each transaction initiated by a user is first assessed for authenticity, and only approved transactions are executed and permanently recorded on the blockchain. This project demonstrates secure transaction workflows, smart contract integration, and full-stack blockchain application development.',
      techStack: ['Geth', 'Solidity', 'Web3.js', 'Node.js', 'Express.js', 'React'],
      thumbnail: '../../src/assets/Zentron.png',
      media: [
        { type: 'image', url: '../../src/assets/Zentron.png' },
        // { type: 'image', url: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&h=800&fit=crop' },
        // { type: 'image', url: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=1200&h=800&fit=crop' },
      ],
      githubLink: '',
      liveLink: '',
    },
  ];

  const openMediaGallery = (project) => {
    setSelectedProject(project);
    setCurrentMediaIndex(0);
  };

  const closeMediaGallery = () => {
    setSelectedProject(null);
    setCurrentMediaIndex(0);
  };

  const nextMedia = () => {
    if (selectedProject) {
      setCurrentMediaIndex((prev) => 
        prev === selectedProject.media.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevMedia = () => {
    if (selectedProject) {
      setCurrentMediaIndex((prev) => 
        prev === 0 ? selectedProject.media.length - 1 : prev - 1
      );
    }
  };

  return (
    <section className="relative min-h-screen w-full bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 flex items-center justify-center py-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-400/10 rounded-full blur-3xl top-20 right-20 animate-pulse-slow"></div>
        <div className="absolute w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl bottom-20 left-20 animate-pulse-slow animation-delay-2000"></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10 px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-400/10 to-fuchsia-500/10 border border-blue-400/30 backdrop-blur-sm">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
            <p className="text-blue-400 text-sm font-medium tracking-wide uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
              Portfolio Showcase
            </p>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <span className="block bg-gradient-to-r from-blue-400 via-fuchsia-400 to-lime-400 bg-clip-text text-transparent animate-gradient-x">
              Featured Projects
            </span>
          </h2>

          <p className="text-slate-300 text-lg max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Explore my latest work and creative solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-fuchsia-500 to-lime-400 rounded-3xl blur opacity-0 group-hover:opacity-40 transition duration-500"></div>
              
              {/* Card */}
              <div className="relative h-full bg-slate-900/50 backdrop-blur-xl rounded-3xl border border-slate-700/50 overflow-hidden group-hover:border-transparent transition-all duration-300">
                {/* Thumbnail */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                  
                  {/* View Media Button */}
                  <button
                    onClick={() => openMediaGallery(project)}
                    className="absolute top-4 right-4 px-4 py-2 bg-fuchsia-500/90 hover:bg-fuchsia-600 backdrop-blur-sm rounded-full text-white text-sm font-semibold flex items-center gap-2 transform hover:scale-105 transition-all duration-300"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    View Media ({project.media.length})
                  </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-800/50 backdrop-blur-sm rounded-full text-xs font-medium text-lime-400 border border-lime-400/30"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-4">
                    {/* GitHub Link */}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-700/50 backdrop-blur-sm rounded-full text-white text-sm font-medium transition-all duration-300 border border-slate-600/50 hover:border-fuchsia-400/50"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        GitHub
                      </a>
                    )}

                    {/* Live Demo Link */}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-fuchsia-500 hover:from-blue-600 hover:to-fuchsia-600 rounded-full text-white text-sm font-semibold transition-all duration-300 transform hover:scale-105"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Media Gallery Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg">
          <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col">
            {/* Close Button - Moved inside and made more visible */}
            <button
              onClick={closeMediaGallery}
              className="absolute -top-12 right-0 md:-right-12 p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 z-50"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Media Container */}
            <div className="relative bg-slate-900/90 backdrop-blur-xl rounded-3xl border border-slate-700/50 overflow-hidden flex flex-col shadow-2xl">
              {/* Project Title */}
              <div className="p-4 border-b border-slate-700/50 flex justify-between items-center bg-slate-900/50">
                <div>
                  <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {selectedProject.title}
                  </h3>
                  <p className="text-slate-400 text-xs mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {currentMediaIndex + 1} / {selectedProject.media.length}
                  </p>
                </div>
                {/* Mobile Close Button */}
                <button 
                  onClick={closeMediaGallery}
                  className="md:hidden p-2 text-slate-400 hover:text-white"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Media Display - Adjusted Height */}
              <div className="relative bg-slate-950 flex-1 flex items-center justify-center overflow-hidden min-h-[300px] max-h-[60vh]">
                {selectedProject.media[currentMediaIndex].type === 'image' ? (
                  <img
                    src={selectedProject.media[currentMediaIndex].url}
                    alt={`${selectedProject.title} - ${currentMediaIndex + 1}`}
                    className="w-full h-full object-contain max-h-[60vh]"
                  />
                ) : (
                  <video
                    src={selectedProject.media[currentMediaIndex].url}
                    controls
                    className="w-full h-full object-contain max-h-[60vh]"
                  />
                )}

                {/* Navigation Arrows */}
                {selectedProject.media.length > 1 && (
                  <>
                    <button
                      onClick={prevMedia}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-fuchsia-500/80 backdrop-blur-sm rounded-full text-white transition-all duration-300 border border-white/10"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={nextMedia}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-fuchsia-500/80 backdrop-blur-sm rounded-full text-white transition-all duration-300 border border-white/10"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnail Navigation */}
              {selectedProject.media.length > 1 && (
                <div className="p-3 flex gap-2 overflow-x-auto bg-slate-900/50 border-t border-slate-700/50">
                  {selectedProject.media.map((media, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentMediaIndex(index)}
                      className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                        index === currentMediaIndex
                          ? 'border-fuchsia-500 scale-105 opacity-100'
                          : 'border-slate-700 hover:border-slate-500 opacity-60 hover:opacity-100'
                      }`}
                    >
                      {media.type === 'image' ? (
                        <img src={media.url} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                          <svg className="w-6 h-6 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

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

export default Projects;
