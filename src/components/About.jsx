import { motion } from 'framer-motion';
import { HiChip, HiCloud, HiDatabase } from 'react-icons/hi';
import { aboutText } from '../data/resumeData';
import SectionTitle from './SectionTitle';

const EXPERTISE = [
  {
    icon: <HiChip size={26} />,
    color: 'text-indigo-600 dark:text-indigo-400',
    bg: 'bg-indigo-50 dark:bg-indigo-500/15',
    border: 'border-indigo-200 dark:border-indigo-500/25',
    glow: 'hover:shadow-indigo-500/10',
    title: 'Backend Engineering',
    description:
      'Building scalable microservices and REST APIs with Spring Boot — from JWT-secured auth flows to event-driven real-time synchronization at production scale.',
    tags: ['Java', 'Spring Boot', 'REST APIs', 'Microservices', 'WebSockets'],
  },
  {
    icon: <HiCloud size={26} />,
    color: 'text-sky-600 dark:text-sky-400',
    bg: 'bg-sky-50 dark:bg-sky-500/15',
    border: 'border-sky-200 dark:border-sky-500/25',
    glow: 'hover:shadow-sky-500/10',
    title: 'Cloud & DevOps',
    description:
      'Deploying containerized services on AWS with ECS, load balancing, auto-scaling, and private networking for reliable, high-throughput production workloads.',
    tags: ['AWS', 'Docker', 'ECS', 'Auto-scaling', 'Git'],
  },
  {
    icon: <HiDatabase size={26} />,
    color: 'text-emerald-600 dark:text-emerald-400',
    bg: 'bg-emerald-50 dark:bg-emerald-500/15',
    border: 'border-emerald-200 dark:border-emerald-500/25',
    glow: 'hover:shadow-emerald-500/10',
    title: 'System Design & AI',
    description:
      'Architecting distributed systems with gRPC, Redis caching, and RAG pipelines — plus ML-powered features like biometric verification and codebase intelligence.',
    tags: ['System Design', 'gRPC', 'Redis', 'RAG', 'PostgreSQL'],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const About = () => (
  <section id="about" className="py-20">
    <div className="section-container">
      <SectionTitle
        title="About Me"
        subtitle="A quick look at who I am and what I bring to the table"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center mb-14"
      >
        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
          {aboutText}
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {['Microservices', 'AWS Cloud', 'Spring Boot', 'System Design', 'REST APIs'].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-indigo-50 dark:bg-indigo-500/15 text-indigo-700 dark:text-indigo-300
                         border border-indigo-200 dark:border-indigo-500/30 rounded-lg text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        {EXPERTISE.map(({ icon, color, bg, border, glow, title, description, tags }) => (
          <motion.div
            key={title}
            variants={cardVariants}
            className={`glass-card p-7 flex flex-col gap-5 group
                        hover:shadow-xl ${glow}
                        hover:border-opacity-60 transition-all duration-300`}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${bg} ${color}
                             border ${border} group-hover:scale-110 transition-transform duration-200`}>
              {icon}
            </div>

            <div>
              <h3 className={`text-base font-bold mb-2 ${color}`}>{title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-100 dark:border-white/10">
              {tags.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 text-xs font-medium rounded-md
                             bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300
                             border border-gray-200 dark:border-white/10"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default About;
