import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { HiArrowDown, HiDownload } from 'react-icons/hi';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { personal } from '../data/resumeData';

const TERMINAL_LINES = [
  { type: 'cmd',     text: './mvnw spring-boot:run' },
  { type: 'success', text: '✓ Studify API online — 1000+ req/min' },
  { type: 'blank',   text: '' },
  { type: 'cmd',     text: 'aws ecs deploy --service studify' },
  { type: 'info',    text: '→ 50 concurrent WebRTC sessions active' },
  { type: 'success', text: '✓ Auto-scaling enabled on AWS ECS' },
  { type: 'blank',   text: '' },
  { type: 'cmd',     text: 'docker compose up -d' },
  { type: 'success', text: '✓ Microservices healthy' },
  { type: 'success', text: '✓ Redis cache connected' },
  { type: 'blank',   text: '' },
  { type: 'cmd',     text: 'echo "Let\'s build something great"' },
  { type: 'output',  text: "Let's build something great" },
];

const LINE_COLORS = {
  cmd:     'text-indigo-400',
  success: 'text-emerald-400',
  info:    'text-yellow-400',
  output:  'text-gray-300',
  blank:   '',
};

const TerminalWindow = () => {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (visibleCount >= TERMINAL_LINES.length) return;
    const delay = TERMINAL_LINES[visibleCount].type === 'blank' ? 120 : 280;
    const t = setTimeout(() => setVisibleCount((n) => n + 1), delay);
    return () => clearTimeout(t);
  }, [visibleCount]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
      className="w-full max-w-lg animate-float"
    >
      <div className="bg-gray-900 rounded-t-xl px-4 py-3 flex items-center gap-2 border border-white/10">
        <span className="w-3 h-3 rounded-full bg-red-500/80" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
        <span className="ml-3 text-xs text-gray-500 font-mono">{personal.githubUsername}@portfolio ~ </span>
      </div>

      <div className="bg-gray-950/90 rounded-b-xl px-5 py-4 font-mono text-sm border border-t-0 border-white/10 min-h-[260px]">
        {TERMINAL_LINES.slice(0, visibleCount).map((line, i) => (
          <div key={i} className={`leading-6 ${LINE_COLORS[line.type]}`}>
            {line.type === 'cmd' ? (
              <span>
                <span className="text-indigo-500 select-none">$ </span>
                {line.text}
              </span>
            ) : (
              <span className="pl-4">{line.text}</span>
            )}
          </div>
        ))}

        {visibleCount >= TERMINAL_LINES.length && (
          <span className="inline-block w-2 h-4 bg-indigo-400 animate-blink ml-0.5 align-middle" />
        )}
      </div>
    </motion.div>
  );
};

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-indigo-500/10 dark:bg-indigo-500/8 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-violet-500/10 dark:bg-violet-500/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="relative shrink-0">
                <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-indigo-500/50 shadow-lg shadow-indigo-500/20">
                  <img
                    src={personal.avatar}
                    alt={personal.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white dark:border-gray-950" />
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium
                         bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400
                         border border-emerald-200 dark:border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Open to opportunities
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-gray-900 dark:text-white leading-none mb-3"
            >
              {personal.firstName}
              <br />
              <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-600 bg-clip-text text-transparent">
                {personal.lastName}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl sm:text-2xl font-semibold text-gray-600 dark:text-gray-300 mb-4"
            >
              {personal.role}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base text-gray-500 dark:text-gray-400 max-w-md leading-relaxed mb-8"
            >
              {personal.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <button onClick={scrollToProjects} className="btn-primary">
                View Projects
                <HiArrowDown size={16} />
              </button>
              <a
                href={personal.resumeFile}
                download="Rudra_Mehta_Resume.pdf"
                className="btn-secondary"
              >
                Download Resume
                <HiDownload size={16} />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex items-center gap-4"
            >
              {[
                { href: personal.github,   icon: <FiGithub size={20} />,   label: 'GitHub' },
                { href: personal.linkedin, icon: <FiLinkedin size={20} />, label: 'LinkedIn' },
                { href: `mailto:${personal.email}`, icon: <FiMail size={20} />, label: 'Email' },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center
                             text-gray-500 dark:text-gray-400
                             border border-gray-200 dark:border-white/15
                             hover:text-indigo-600 dark:hover:text-indigo-400
                             hover:border-indigo-300 dark:hover:border-indigo-500/50
                             hover:bg-indigo-50 dark:hover:bg-indigo-500/10
                             transition-all duration-200 hover:scale-110"
                >
                  {icon}
                </a>
              ))}
            </motion.div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <TerminalWindow />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-400 dark:text-gray-600"
        >
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >
            <HiArrowDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
