import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  color: string; // e.g., 'bg-sky-100'
}

export function ServiceCard({ title, description, image, color }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="group relative overflow-hidden rounded-3xl bg-white shadow-lg border border-slate-100 transition-all duration-300 hover:shadow-2xl"
    >
      <div className="aspect-[4/3] overflow-hidden relative">
        <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10", color)}></div>
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-rose-600 transition-colors">
          {title}
        </h3>
        <p className="text-slate-600 leading-relaxed text-lg">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
