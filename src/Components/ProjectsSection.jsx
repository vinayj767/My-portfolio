import React from "react";
import { Github, ExternalLink, Server, Brain, ShoppingCart, Calendar } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "E-commerce Platform with Microservices",
      date: "February 2025",
      description: "A full-stack e-commerce platform built with microservices architecture featuring Users, Products, Cart, and Orders services routed via an API Gateway. Includes secure JWT authentication and complete order processing system.",
      technologies: ["React", "Node.js", "MongoDB", "Docker", "JWT", "API Gateway"],
      features: [
        "Microservices architecture with API Gateway",
        "Secure JWT authentication system",
        "Complete order processing workflow",
      ],
      icon: ShoppingCart,
      color: "from-green-500 to-emerald-600",
      links: [
        { type: "github", url: "https://github.com/vinayj767", label: "View Code" }
      ],
      status: "Completed"
    },
    {
      title: "Medical AI Assistant",
      date: "November 2024",
      description: "A conversational AI model trained on medical dialogue datasets for healthcare information management, achieving 85% response accuracy through advanced NLP techniques.",
      technologies: ["Python", "Flask", "Transformers", "PyTorch", "NLP", "Healthcare AI"],
      features: [
        "85% response accuracy in medical queries",
        "Advanced semantic matching algorithms",
        "Context memory for conversation continuity",
      ],
      icon: Brain,
      color: "from-blue-500 to-cyan-600",
      links: [
        { type: "github", url: "https://github.com/vinayj767", label: "View Code" }
      ],
      status: "Completed"
    },
    {
      title: "AURA Financial Platform",
      date: "August 2025",
      description: "Google Hackathon finalist project featuring a Gemini-powered multi-agent system with Node.js/Go microservices backend for real-time portfolio analytics.",
      technologies: ["Node.js", "Go", "Google Cloud", "Gemini AI", "React", "Real-time Analytics"],
      features: [
        "Gemini-powered multi-agent AI system",
        "Real-time portfolio analytics dashboard",
        "Risk assessment and management tools",
      ],
      icon: Server,
      color: "from-amber-500 to-orange-600",
      links: [
        { type: "demo", url: "#", label: "Live Demo" },
        { type: "github", url: "https://github.com/vinayj767", label: "View Code" }
      ],
      status: "Live",
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Innovative solutions spanning full-stack development, AI/ML, and enterprise-grade applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl hover:shadow-2xl transition-all duration-500 border-0 shadow-lg ${project.featured ? 'lg:col-span-2 xl:col-span-1' : ''
                }`}
            >
              {project.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-white bg-gradient-to-r from-amber-500 to-amber-600 border-0 rounded-full shadow-lg">
                    Featured
                  </span>
                </div>
              )}

              <div className="p-0 h-full">
                <div className="p-8 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-14 h-14 bg-gradient-to-r ${project.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <project.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex items-center text-slate-500 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {project.date}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-start text-sm text-slate-600">
                            <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech, i) => (
                        <span key={i} className="inline-flex items-center px-2 py-1 text-xs font-medium text-slate-700 bg-slate-100 rounded-md hover:bg-slate-200 transition-colors duration-200">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-slate-500 bg-slate-100 rounded-md">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-6 mt-6 border-t border-slate-100">
                    <div className="flex items-center">
                      <div className={`w-2 h-2 rounded-full mr-2 ${project.status === 'Live' ? 'bg-green-500' : 'bg-blue-500'
                        }`}></div>
                      <span className="text-sm text-slate-600">{project.status}</span>
                    </div>
                    <div className="flex gap-2">
                      {project.links.map((link, i) => (
                        <a
                          key={i}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-3 py-1.5 border border-slate-200 text-sm font-medium rounded-md text-slate-600 hover:bg-amber-50 hover:border-amber-300 hover:text-amber-700 transition-all duration-200"
                        >
                          {link.type === 'github' ? (
                            <Github className="w-4 h-4 mr-2" />
                          ) : (
                            <ExternalLink className="w-4 h-4 mr-2" />
                          )}
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}