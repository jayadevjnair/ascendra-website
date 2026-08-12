import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Award, Briefcase, Building2 } from 'lucide-react';
import { TRUST_STATS } from '../data/stats';

const iconMap: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap size={26} />,
  Award: <Award size={26} />,
  Briefcase: <Briefcase size={26} />,
  Building2: <Building2 size={26} />,
};

interface CounterProps {
  target: number;
  suffix: string;
}

const AnimatedCounter: React.FC<CounterProps> = ({ target, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000; // 2 seconds
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);
    const increment = target / totalFrames;
    let currentFrame = 0;

    const timer = setInterval(() => {
      currentFrame++;
      start += increment;
      if (currentFrame >= totalFrames) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

export const TrustStats: React.FC = () => {
  return (
    <section className="trust-strip">
      <div className="container">
        <div className="trust-grid">
          {TRUST_STATS.map((stat, idx) => (
            <motion.div
              key={stat.id}
              className="trust-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="trust-icon-box">
                {iconMap[stat.iconName]}
              </div>
              <div>
                <div className="trust-number">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="trust-label">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
