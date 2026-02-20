import { motion } from 'framer-motion';
import { Users, GraduationCap, Building2, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

function CountUp({ end }) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        let startTime;
        let animationFrame;
        const duration = 2000;
        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            if (progress < duration) {
                setCount(Math.min(end, Math.floor((progress / duration) * end)));
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };
        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [end]);
    return <span className="tabular-nums">{count.toLocaleString()}</span>;
}

export default function Impact() {
    return (
        <section id="impact" className="min-h-screen snap-start flex flex-col items-center justify-center relative w-full">
            <div className="max-w-7xl mx-auto px-6 text-center w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight font-sans">
                        우리의 지속적인 성과와 변화는<br />
                        <span className="text-silver-400">커뮤니티 구성원, 후원자, 파트너들과 함께 만들어가고 있습니다.</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-12 mb-20">
                    {[
                        { icon: Users, count: 3799, label: '대학생 봉사단' },
                        { icon: GraduationCap, count: 630, label: '사회인 멘토단' },
                        { icon: Building2, count: 827, label: '학습센터' },
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.5, delay: i * 0.2 }}
                            className="flex flex-col items-center"
                        >
                            <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                                <stat.icon className="w-8 h-8 text-accent-cyan" />
                            </div>
                            <div className="text-6xl md:text-7xl font-bold text-white mb-4 font-mono">
                                <CountUp end={stat.count} />
                            </div>
                            <div className="text-xl text-silver-400 font-medium">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    className="flex justify-center"
                >
                    <button className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center gap-2">
                        성과 자세히 보기 <ArrowRight className="w-4 h-4" />
                    </button>
                </motion.div>
            </div>

            {/* Background Decor */}
            <div className="absolute right-0 bottom-0 w-1/3 h-1/3 bg-gradient-to-tl from-accent-cyan/10 to-transparent blur-3xl" />
        </section>
    );
}
