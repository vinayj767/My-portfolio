import React from "react";
import { Trophy, Award, Target, ExternalLink, Calendar, Users } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Google Agentic AI Hackathon Finalist",
      organization: "Google",
      period: "August 2025",
      type: "hackathon",
      distinction: "One of 50 student teams selected from over 57,000 applicants",
      description: "Architected 'AURA,' a financial platform with a Gemini-powered multi-agent system, engineering a Node.js/Go microservices backend to orchestrate agent tasks.",
      achievements: [
        "Deployed full-stack application on Google Cloud App Engine",
        "Developed responsive dashboard for real-time portfolio analytics",
        "Implemented risk assessment algorithms"
      ],
      technologies: ["Node.js", "Go", "Google Cloud", "Gemini AI", "React"],
      links: [
        { label: "Live Demo", url: "#", type: "demo" }
      ],
      icon: Trophy,
      color: "from-yellow-500 to-amber-600"
    },
    {
      title: "Research Paper Author",
      organization: "IIIT Dharwad",
      period: "Jan 2025 – April 2025",
      type: "research",
      description: "Authored a research paper on an AI-powered EV charging scheduler, designing machine learning algorithms for optimal resource allocation.",
      achievements: [
        "Developed Python simulations showing 20% improvement in resource utilization",
        "Created adaptive, data-driven slot allocation system",
        "Implemented machine learning algorithms for optimization"
      ],
      technologies: ["Python", "Machine Learning", "Data Analysis", "Research"],
      icon: Award,
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Level Supermind Hackathon",
      organization: "Level Supermind",
      period: "January 2024",
      type: "hackathon",
      distinction: "Top 500 among 20,000+ participants",
      description: "Developed an NLP-powered multilingual system using Transformers trained on 22 Indian languages.",
      achievements: [
        "Achieved 85% accuracy in document processing",
        "Implemented intelligent text classification",
        "Optimized model inference speed by 30%"
      ],
      technologies: ["NLP", "Transformers", "Python", "Deep Learning"],
      icon: Target,
      color: "from-purple-500 to-violet-600"
    }
  ];

  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Experience & Achievements
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Leading innovations in AI and full-stack development through hackathons, research, and real-world projects
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="group hover:shadow-xl transition-all duration-500 border-0 shadow-lg overflow-hidden rounded-2xl">
              <div className="p-0">
                <div className="flex flex-col lg:flex-row">
                  {/* Left Column - Icon & Meta */}
                  <div className="lg:w-1/4 p-8 bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <div className={`w-16 h-16 bg-gradient-to-r ${exp.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <exp.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-center lg:justify-start text-slate-600 text-sm">
                        <Calendar className="w-4 h-4 mr-2" />
                        {exp.period}
                      </div>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-200 text-slate-800">
                        {exp.type === 'hackathon' ? 'Hackathon' : 'Research'}
                      </span>
                    </div>
                  </div>

                  {/* Right Column - Content */}
                  <div className="lg:w-3/4 p-8">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <div className="flex items-center text-slate-600 mb-3">
                        <Users className="w-4 h-4 mr-2" />
                        {exp.organization}
                      </div>
                      {exp.distinction && (
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-sm font-medium mb-4">
                          <Trophy className="w-4 h-4 mr-2" />
                          {exp.distinction}
                        </div>
                      )}
                      <p className="text-slate-600 text-lg leading-relaxed">
                        {exp.description}
                      </p>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-900 mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start text-slate-600">
                            <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies & Links */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span key={i} className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium text-slate-600 border border-slate-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                      {exp.links && (
                        <div className="flex gap-3">
                          {exp.links.map((link, i) => (
                            <a
                              key={i}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-slate-700 bg-slate-100 hover:bg-amber-50 hover:border-amber-300 hover:text-amber-700 transition-all duration-200"
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              {link.label}
                            </a>
                          ))}
                        </div>
                      )}
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