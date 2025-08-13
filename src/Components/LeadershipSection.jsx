import React from "react";
import { Users, Calendar, Trophy, Lightbulb, Target, Heart } from "lucide-react";

export default function LeadershipSection() {
  const leadershipRoles = [
    {
      title: "President, E-Cell IIIT Dharwad",
      period: "Jan 2024 – Apr 2025",
      organization: "Entrepreneurship Cell",
      description: "Leading entrepreneurial initiatives and startup ecosystem development at IIIT Dharwad",
      achievements: [
        "Organized 10+ startup events and workshops",
        "Mentored junior students in entrepreneurship",
        "Collaborated with VCs, founders, and alumni network",
        "Built strategic partnerships with industry leaders"
      ],
      metrics: [
        { label: "Events Organized", value: "10+" },
        { label: "Students Mentored", value: "50+" },
        { label: "Industry Partnerships", value: "15+" }
      ],
      icon: Lightbulb,
      color: "from-amber-500 to-orange-600",
      impact: "High"
    },
    {
      title: "On-Campus Lead, Google Developer Groups",
      period: "Sep 2024 – Apr 2025",
      organization: "Google Developer Groups",
      description: "Spearheading technical education and developer community building initiatives",
      achievements: [
        "Led 5+ technical workshops on AI/ML technologies",
        "Collaborated with industry experts on hands-on coding events",
        "Organized developer meetups and tech talks",
        "Fostered innovation through hackathons and competitions"
      ],
      metrics: [
        { label: "Workshops Conducted", value: "5+" },
        { label: "Developers Reached", value: "200+" },
        { label: "Technical Sessions", value: "12+" }
      ],
      icon: Target,
      color: "from-blue-500 to-indigo-600",
      impact: "High"
    },
    {
      title: "President, Event Management Club",
      period: "Mar 2023 – Present",
      organization: "IIIT Dharwad",
      description: "Managing large-scale cultural events and leading diverse teams for successful execution",
      achievements: [
        "Managed cultural events with 1000+ attendees",
        "Led and coordinated team of 30+ volunteers",
        "Executed complex event logistics and operations",
        "Maintained high standards of event quality and safety"
      ],
      metrics: [
        { label: "Events Managed", value: "20+" },
        { label: "Total Attendees", value: "1000+" },
        { label: "Team Members", value: "30+" }
      ],
      icon: Heart,
      color: "from-pink-500 to-rose-600",
      impact: "Medium"
    }
  ];

  const getImpactColor = (impact) => {
    switch (impact) {
      case "High": return "bg-green-100 text-green-800 border-green-200";
      case "Medium": return "bg-blue-100 text-blue-800 border-blue-200";
      default: return "bg-slate-100 text-slate-800 border-slate-200";
    }
  };

  return (
    <section id="leadership" className="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Leadership & Impact
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Driving innovation, mentorship, and community building through diverse leadership roles and initiatives
          </p>
        </div>

        <div className="space-y-8">
          {leadershipRoles.map((role, index) => (
            <div key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden rounded-2xl">
              <div className="p-0">
                <div className="flex flex-col lg:flex-row">
                  {/* Left Column - Visual & Meta */}
                  <div className="lg:w-1/3 p-8 bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <div className={`w-16 h-16 bg-gradient-to-r ${role.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <role.icon className="w-8 h-8 text-white" />
                    </div>

                    <div className="space-y-4 w-full">
                      <div className="flex items-center justify-center lg:justify-start text-slate-600 text-sm">
                        <Calendar className="w-4 h-4 mr-2" />
                        {role.period}
                      </div>

                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full border font-medium ${getImpactColor(role.impact)}`}
                      >
                        {role.impact} Impact
                      </span>

                      {/* Metrics */}
                      <div className="space-y-3 pt-4">
                        {role.metrics.map((metric, i) => (
                          <div key={i} className="text-center lg:text-left">
                            <div className="text-2xl font-bold text-slate-900">
                              {metric.value}
                            </div>
                            <div className="text-sm text-slate-600">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Content */}
                  <div className="lg:w-2/3 p-8">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">
                        {role.title}
                      </h3>
                      <div className="flex items-center text-slate-600 mb-4">
                        <Users className="w-4 h-4 mr-2" />
                        {role.organization}
                      </div>
                      <p className="text-slate-600 text-lg leading-relaxed">
                        {role.description}
                      </p>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-4 flex items-center">
                        <Trophy className="w-5 h-5 mr-2 text-amber-500" />
                        Key Achievements
                      </h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {role.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start text-slate-600">
                            <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-sm leading-relaxed">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Leadership Summary */}
        <div className="mt-16 text-center bg-gradient-to-r from-slate-900 to-slate-700 rounded-3xl p-12 text-white">
          <h3 className="text-2xl font-bold mb-6">Leadership Impact Summary</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-amber-400 mb-2">3</div>
              <div className="text-slate-300">Leadership Roles</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-400 mb-2">35+</div>
              <div className="text-slate-300">Events Organized</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-400 mb-2">250+</div>
              <div className="text-slate-300">Students Impacted</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-400 mb-2">2+</div>
              <div className="text-slate-300">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}