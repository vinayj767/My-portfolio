import React from "react";
import HeroSection from "../Components/HeroSection";
import ExperienceSection from "../Components/ExperienceSection";
import ProjectsSection from "../Components/ProjectsSection";
import SkillsSection from "../Components/SkillsSection";
import LeadershipSection from "../Components/LeadershipSection";
import EducationSection from "../Components/EducationSection";
import ContactSection from "../Components/ContactSection";

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <LeadershipSection />
      <EducationSection />
      <ContactSection />

      {/* Personal Interest Section */}
      <section className="py-16 bg-gradient-to-r from-slate-100 to-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-amber-100 to-amber-50 border border-amber-200 text-amber-800 font-medium">
            <span className="mr-2">🌎</span>
            Beyond coding, I love exploring new places, especially on road trips
          </div>
        </div>
      </section>
    </div>
  );
}