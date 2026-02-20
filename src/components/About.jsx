import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Compass, Users, Lightbulb, TrendingUp, Star } from 'lucide-react';

const coreValues = [
    { icon: Compass, label: '발견', en: 'Discovery', angle: -90 },
    { icon: Users, label: '협력', en: 'With', angle: -18 },
    { icon: Lightbulb, label: '창의성', en: 'Creativity', angle: 54 },
    { icon: TrendingUp, label: '지속 성장', en: 'Sustainability', angle: 126 },
    { icon: Star, label: '전문성', en: 'Excellence', angle: 198 },
];

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="about" className="relative py-32 px-6" ref={ref}>
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-purple-500/[0.02] blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-accent-glow/70 text-sm font-medium tracking-[0.15em] uppercase">
                        About Orbita
                    </span>
                    <h2 className="section-title mt-4">회사 소개</h2>
                </motion.div>

                {/* CEO Quote */}
                <motion.div
                    className="max-w-3xl mx-auto mb-24"
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="glass-card p-10 md:p-14 text-center relative">
                        {/* Quotation mark */}
                        <div className="absolute top-6 left-8 text-6xl text-accent-glow/10 font-serif leading-none select-none">
                            "
                        </div>

                        <blockquote className="text-xl md:text-2xl text-silver-300 font-light leading-relaxed mb-8 italic">
                            <span className="text-gradient font-medium not-italic">교육이 아닌 성장을,</span>
                            <br />
                            학생이 아닌 파트너를 찾습니다.
                        </blockquote>

                        <div className="flex items-center justify-center gap-3">
                            <img
                                src="/logo.jpg"
                                alt="Orbita"
                                className="w-12 h-12 rounded-full object-cover mix-blend-screen filter invert grayscale"
                            />
                            <div className="text-left">
                                <div className="text-silver-300 text-sm font-semibold">Woo Young</div>
                                <div className="text-silver-600 text-xs">오르비타 대표</div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Core Values — Orbit Layout */}
                <motion.div
                    className="relative"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    <h3 className="text-center text-silver-400 text-sm font-medium tracking-[0.15em] uppercase mb-16">
                        Core Values
                    </h3>

                    {/* Desktop: Circular orbit layout */}
                    <div className="hidden md:block relative mx-auto" style={{ width: 500, height: 500 }}>
                        {/* Orbit ring */}
                        <div className="absolute inset-[50px] rounded-full border border-silver-300/[0.06] animate-spin-slower" />
                        <div className="absolute inset-[100px] rounded-full border border-silver-300/[0.04]" />

                        {/* Center logo */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent-blue/20 to-accent-glow/20 border border-accent-glow/10 flex items-center justify-center overflow-hidden">
                                <img
                                    src="/logo.jpg"
                                    alt="Orbita"
                                    className="w-20 h-20 object-contain mix-blend-screen filter invert grayscale"
                                />
                            </div>
                        </div>

                        {/* Value nodes */}
                        {coreValues.map((val, i) => {
                            const radius = 200;
                            const rad = (val.angle * Math.PI) / 180;
                            const x = 250 + radius * Math.cos(rad) - 60;
                            const y = 250 + radius * Math.sin(rad) - 60;

                            return (
                                <motion.div
                                    key={val.en}
                                    className="absolute w-[120px] h-[120px] flex flex-col items-center justify-center glass-card !rounded-2xl group cursor-default"
                                    style={{ left: x, top: y }}
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ duration: 0.6, delay: 0.5 + i * 0.12 }}
                                    whileHover={{ scale: 1.08 }}
                                >
                                    <val.icon className="w-6 h-6 text-accent-glow/70 mb-2 group-hover:text-accent-glow transition-colors" />
                                    <span className="text-silver-200 text-sm font-semibold">{val.label}</span>
                                    <span className="text-silver-600 text-[10px] font-medium mt-0.5">{val.en}</span>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Mobile: Horizontal scroll */}
                    <div className="md:hidden grid grid-cols-2 gap-4">
                        {coreValues.map((val, i) => (
                            <motion.div
                                key={val.en}
                                className="glass-card p-6 flex flex-col items-center text-center"
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                            >
                                <val.icon className="w-6 h-6 text-accent-glow/70 mb-3" />
                                <span className="text-silver-200 text-sm font-semibold">{val.label}</span>
                                <span className="text-silver-600 text-[10px] font-medium mt-1">{val.en}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
