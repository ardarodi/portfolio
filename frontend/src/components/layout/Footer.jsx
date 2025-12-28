import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import { personalInfo, navLinks } from '../../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-navy-900 border-t border-blurple-500/10">
      {/* Gradient Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blurple-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blurple-500 to-indigo-600 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white">
                {personalInfo.name.split(' ')[0]}
                <span className="text-blurple-400">.dev</span>
              </span>
            </a>
            <p className="text-slate-400 max-w-md leading-relaxed mb-6">
              {personalInfo.shortBio}
            </p>
            <div className="flex items-center gap-3">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-blurple-500/10 text-slate-400 hover:text-white hover:border-blurple-500/30 hover:bg-blurple-500/10 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-blurple-500/10 text-slate-400 hover:text-white hover:border-blurple-500/30 hover:bg-blurple-500/10 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={personalInfo.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-blurple-500/10 text-slate-400 hover:text-white hover:border-blurple-500/30 hover:bg-blurple-500/10 transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={personalInfo.socials.email}
                className="p-3 rounded-xl bg-white/5 border border-blurple-500/10 text-slate-400 hover:text-white hover:border-blurple-500/30 hover:bg-blurple-500/10 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.slice(0, 4).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-blurple-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={personalInfo.socials.email}
                  className="text-slate-400 hover:text-blurple-400 transition-colors duration-200"
                >
                  {personalInfo.email}
                </a>
              </li>
              <li className="text-slate-400">
                {personalInfo.location}
              </li>
              <li className="text-slate-400">
                {personalInfo.university}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-blurple-500/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm flex items-center gap-1">
              © {currentYear} {personalInfo.name}. Built with 
              <Heart className="w-4 h-4 text-blurple-500 inline mx-1" />
              in Budapest
            </p>
            <p className="text-slate-500 text-sm">
              Designed & Developed by <span className="text-blurple-400">{personalInfo.name.split(' ')[0]}</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
