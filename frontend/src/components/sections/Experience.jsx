import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { experiences } from '../../data/mock';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-navy-800/30" />
      <div className="absolute top-0 left-1/4 w-80 h-80 blob blob-purple opacity-15" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 blob blob-indigo opacity-10" />

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-blurple-400 text-sm font-medium tracking-wider uppercase mb-4 block">
            Journey
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            My professional journey and academic background
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 lg:left-1/2 lg:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blurple-500 via-blurple-600 to-indigo-600" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative flex flex-col lg:flex-row gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blurple-500 border-4 border-navy-900 shadow-lg shadow-blurple-500/30 z-10" />

                {/* Content Card */}
                <div className={`ml-16 lg:ml-0 lg:w-1/2 ${
                  index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'
                }`}>
                  <div className="glass-card glass-card-hover p-6 rounded-2xl">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 rounded-xl ${
                        exp.type === 'education' 
                          ? 'bg-indigo-500/10 text-indigo-400' 
                          : 'bg-blurple-500/10 text-blurple-400'
                      }`}>
                        {exp.type === 'education' 
                          ? <GraduationCap className="w-6 h-6" />
                          : <Briefcase className="w-6 h-6" />
                        }
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-blurple-300 font-medium">
                          {exp.organization}
                        </p>
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm">
                      <span className="flex items-center gap-1 text-slate-400">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1 text-slate-400">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-slate-400 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="inline-flex items-center gap-1 px-3 py-1 text-xs rounded-full bg-blurple-500/10 text-blurple-300 border border-blurple-500/20"
                        >
                          <Award className="w-3 h-3" />
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty Space for Layout */}
                <div className="hidden lg:block lg:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
