import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote } from 'lucide-react';
import { testimonials } from '../../data/mock';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-80 h-80 blob blob-purple opacity-15" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 blob blob-indigo opacity-10" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-blurple-400 text-sm font-medium tracking-wider uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            What People <span className="gradient-text">Say</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Feedback from colleagues, professors, and clients I've worked with
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group"
            >
              <div className="glass-card glass-card-hover p-6 rounded-2xl h-full">
                {/* Quote Icon */}
                <div className="absolute -top-3 -left-3 w-10 h-10 rounded-xl bg-gradient-to-br from-blurple-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blurple-500/25 group-hover:shadow-blurple-500/40 transition-shadow">
                  <Quote className="w-5 h-5 text-white" />
                </div>

                {/* Content */}
                <div className="pt-4">
                  <p className="text-slate-300 leading-relaxed mb-6 italic">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-4 border-t border-blurple-500/10">
                    <Avatar className="h-12 w-12 border-2 border-blurple-500/20">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback className="bg-blurple-500/20 text-blurple-300">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-white font-medium">{testimonial.name}</p>
                      <p className="text-slate-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
