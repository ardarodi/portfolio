import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Server, Database, Wrench } from 'lucide-react';
import { skills } from '../../data/mock';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Progress } from '../ui/progress';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState('frontend');

  const categories = [
    { id: 'frontend', label: 'Frontend', icon: Code2, data: skills.frontend },
    { id: 'backend', label: 'Backend', icon: Server, data: skills.backend },
    { id: 'databases', label: 'Databases', icon: Database, data: skills.databases },
    { id: 'tools', label: 'Tools & DevOps', icon: Wrench, data: skills.tools },
  ];

  return (
    <section id="skills" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-navy-800/30" />
      <div className="absolute top-1/2 left-0 w-80 h-80 blob blob-purple opacity-15" />
      <div className="absolute top-1/4 right-0 w-96 h-96 blob blob-indigo opacity-10" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-blurple-400 text-sm font-medium tracking-wider uppercase mb-4 block">
            Technical Skills
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Technologies I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Tabs */}
        <Tabs defaultValue="frontend" className="w-full" onValueChange={setActiveCategory}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <TabsList className="w-full max-w-2xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-2 bg-transparent h-auto p-0 mb-12">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blurple-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white data-[state=active]:border-transparent glass-card border border-blurple-500/20 rounded-xl py-3 px-4 text-slate-400 hover:text-white hover:border-blurple-500/40 transition-all duration-300"
                >
                  <category.icon className="w-4 h-4 mr-2" />
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </motion.div>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.data.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView && activeCategory === category.id ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="glass-card glass-card-hover p-6 rounded-xl"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-blurple-400 font-semibold">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Additional Tech Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-500 text-sm mb-6">Also experienced with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Jest', 'Webpack', 'Vite', 'Tailwind', 'SASS', 'Redux', 'WebSockets', 'OAuth'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full text-sm bg-white/5 border border-blurple-500/10 text-slate-400 hover:border-blurple-500/30 hover:text-white transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
