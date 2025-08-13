import React from "react";
import { Code, Database, Wrench, Brain, Globe, Lightbulb } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "from-blue-500 to-indigo-600",
      skills: [
        { name: "Python", level: "Expert" },
        { name: "JavaScript", level: "Advanced" },
        { name: "C++", level: "Advanced" },
        { name: "Java", level: "Intermediate" },
        { name: "C", level: "Intermediate" },
        { name: "HTML/CSS", level: "Advanced" },
        { name: "SQL", level: "Advanced" }
      ]
    },
    {
      title: "AI/ML Libraries",
      icon: Brain,
      color: "from-purple-500 to-violet-600",
      skills: [
        { name: "PyTorch", level: "Advanced" },
        { name: "Transformers", level: "Advanced" },
        { name: "NumPy", level: "Expert" },
        { name: "Pandas", level: "Expert" },
        { name: "scikit-learn", level: "Advanced" },
        { name: "spaCy", level: "Intermediate" },
        { name: "Hugging Face", level: "Advanced" }
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: Globe,
      color: "from-green-500 to-emerald-600",
      skills: [
        { name: "React", level: "Advanced" },
        { name: "Node.js", level: "Advanced" },
        { name: "Express.js", level: "Advanced" },
        { name: "Flask", level: "Intermediate" }
      ]
    },
    {
      title: "Databases",
      icon: Database,
      color: "from-orange-500 to-red-600",
      skills: [
        { name: "MongoDB", level: "Advanced" },
        { name: "MySQL", level: "Advanced" }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      color: "from-amber-500 to-yellow-600",
      skills: [
        { name: "Git", level: "Advanced" },
        { name: "GitHub", level: "Advanced" },
        { name: "Docker", level: "Intermediate" },
        { name: "Postman", level: "Advanced" },
        { name: "VS Code", level: "Expert" },
        { name: "GitHub Actions", level: "Intermediate" }
      ]
    },
    {
      title: "Specialized Concepts",
      icon: Lightbulb,
      color: "from-cyan-500 to-blue-600",
      skills: [
        { name: "Natural Language Processing", level: "Advanced" },
        { name: "Document Classification", level: "Advanced" },
        { name: "REST API Development", level: "Advanced" },
        { name: "JWT Authentication", level: "Advanced" },
        { name: "Enterprise Information Management", level: "Intermediate" }
      ]
    }
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case "Expert": return "bg-green-100 text-green-800 border-green-200";
      case "Advanced": return "bg-blue-100 text-blue-800 border-blue-200";
      case "Intermediate": return "bg-amber-100 text-amber-800 border-amber-200";
      default: return "bg-slate-100 text-slate-800 border-slate-200";
    }
  };

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Technical Expertise
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive skill set spanning full-stack development, artificial intelligence, and modern software engineering practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="group hover:shadow-xl transition-all duration-500 border-0 shadow-lg overflow-hidden rounded-2xl">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors duration-200">
                      <span className="font-medium text-slate-700">
                        {skill.name}
                      </span>
                      <span
                        className={`px-2.5 py-0.5 rounded-full border text-xs font-semibold ${getLevelColor(skill.level)}`}
                      >
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Skill Count Badge */}
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <div className="flex items-center justify-center">
                    <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-slate-600 bg-slate-100 rounded-full">
                      {category.skills.length} Skills
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 bg-gradient-to-r from-slate-50 to-slate-100 rounded-3xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-slate-900 mb-2">7+</div>
              <div className="text-slate-600">Programming Languages</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 mb-2">7+</div>
              <div className="text-slate-600">AI/ML Libraries</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 mb-2">6+</div>
              <div className="text-slate-600">Development Tools</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 mb-2">5+</div>
              <div className="text-slate-600">Specialized Concepts</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}