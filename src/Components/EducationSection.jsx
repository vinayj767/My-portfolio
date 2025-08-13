import React from "react";
import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react";

export default function EducationSection() {
  const courses = [
    "Machine Learning", "Artificial Intelligence", "Data Structures and Algorithms",
    "Database Management Systems", "Object-Oriented Programming",
    "Computer Networks", "Software Engineering"
  ];

  return (
    <section id="education" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Education
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Strong academic foundation in Computer Science and Engineering with focus on emerging technologies
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="group rounded-2xl hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden">
            <div className="p-0">
              <div className="flex flex-col lg:flex-row">
                {/* Left Column - Visual */}
                <div className="lg:w-1/3 p-8 bg-gradient-to-br from-slate-900 to-slate-700 text-white flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">B.Tech</h3>
                  <p className="text-slate-300 mb-4">Computer Science and Engineering</p>
                  <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-white bg-amber-500 hover:bg-amber-600 border-0 rounded-full">
                    Current Student
                  </span>
                </div>

                {/* Right Column - Details */}
                <div className="lg:w-2/3 p-8">
                  <div className="space-y-6">
                    {/* Institution */}
                    <div>
                      <h4 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                        Indian Institute of Information Technology, Dharwad
                      </h4>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-slate-600 mb-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          2022 – 2026
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          Dharwad, Karnataka
                        </div>
                      </div>
                      <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 font-medium">
                        CGPA: 7.13 / 10.0
                      </div>
                    </div>

                    {/* Relevant Coursework */}
                    <div>
                      <h5 className="font-semibold text-slate-900 mb-4 flex items-center">
                        <BookOpen className="w-5 h-5 mr-2 text-amber-500" />
                        Relevant Coursework
                      </h5>
                      <div className="flex flex-wrap gap-3">
                        {courses.map((course, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-slate-600 border border-slate-300 rounded-full hover:bg-slate-50 hover:border-slate-400 transition-all duration-200"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Academic Highlights */}
                    <div>
                      <h5 className="font-semibold text-slate-900 mb-4">Academic Highlights</h5>
                      <ul className="space-y-3">
                        <li className="flex items-start text-slate-600">
                          <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>Specialized focus on Machine Learning and Artificial Intelligence</span>
                        </li>
                        <li className="flex items-start text-slate-600">
                          <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>Strong foundation in Data Structures, Algorithms, and System Design</span>
                        </li>
                        <li className="flex items-start text-slate-600">
                          <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>Comprehensive training in Software Engineering and Database Systems</span>
                        </li>
                        <li className="flex items-start text-slate-600">
                          <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>Active participation in research and development projects</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}