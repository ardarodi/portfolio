import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Download, MapPin, GraduationCap, Coffee } from 'lucide-react';
import { personalInfo } from '../../data/mock';
import { Button } from '../ui/button';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { label: "Projects Completed", value: "15+" },
    { label: "Years Coding", value: "4+" },
    { label: "Cups of Coffee", value: "1K+" },
    { label: "Happy Clients", value: "10+" },
  ];

  return (
    <section id="about" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-72 h-72 blob blob-purple opacity-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 blob blob-indigo opacity-15" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-blurple-400 text-sm font-medium tracking-wider uppercase mb-4 block">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Passionate About Creating
            <span className="gradient-text"> Digital Excellence</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A dedicated developer who transforms complex problems into elegant solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image/Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden glass-card p-2">
                <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-blurple-600/20 to-indigo-600/20">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face"
                    alt="Profile"
                    className="w-full h-full object-cover mix-blend-luminosity opacity-80 hover:opacity-100 hover:mix-blend-normal transition-all duration-500"
                  />
                </div>
                
                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 }}
                  className="absolute -bottom-4 -right-4 glass-card px-4 py-3 rounded-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blurple-500/20 flex items-center justify-center">
                      <GraduationCap className="w-5 h-5 text-blurple-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">CS Engineering</p>
                      <p className="text-slate-400 text-xs">Óbuda University</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 top-4 left-4 w-full h-full rounded-2xl border border-blurple-500/20" />
              <div className="absolute -z-20 top-8 left-8 w-full h-full rounded-2xl border border-blurple-500/10" />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <p className="text-slate-300 text-lg leading-relaxed">
                {personalInfo.bio}
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 text-slate-400">
                  <MapPin className="w-4 h-4 text-blurple-400" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <Coffee className="w-4 h-4 text-blurple-400" />
                  <span>Coffee Enthusiast</span>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="glass-card p-4 rounded-xl text-center"
                >
                  <p className="text-2xl sm:text-3xl font-bold gradient-text mb-1">
                    {stat.value}
                  </p>
                  <p className="text-slate-400 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="pt-4"
            >
              <Button
                asChild
                className="bg-gradient-to-r from-blurple-600 to-indigo-600 hover:from-blurple-500 hover:to-indigo-500 text-white rounded-full px-6 py-5"
              >
                <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
