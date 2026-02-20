import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building2, Globe, TrendingUp, Users, Award, Handshake } from 'lucide-react';

const businessItems = [
    { icon: Handshake, label: '컴퍼니 빌더' },
    { icon: TrendingUp, label: '지분 파트너' },
    { icon: Users, label: '조인트 벤처' },
];

const supportItems = [
    { icon: Award, label: '크리에이터 서밋' },
    { icon: Globe, label: '브랜드 프로젝트' },
    { icon: Users, label: '네트워크 자산' },
];

export default function Business() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="business" className="relative py-32 px-6" ref={ref}>
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-accent-cyan font-mono text-xs tracking-widest uppercase">
                        // VENTURE_ECOSYSTEM
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">Creator Venture & Ecosystem</h2>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                    {/* Corporate Matching */}
                    <motion.div
                        className="glass-card p-10 relative overflow-hidden group"
                        initial={{ opacity: 0, x: -60 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {/* Background decoration */}
                        <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-accent-blue/[0.04] blur-2xl transition-all duration-700 group-hover:bg-accent-blue/[0.08]" />

                        <div className="relative z-10">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-blue/20 to-accent-glow/20 flex items-center justify-center mb-6">
                                <Building2 className="w-6 h-6 text-accent-glow" />
                            </div>

                            <h3 className="text-2xl font-bold text-silver-200 mb-3">
                                Creator Venture Model
                            </h3>
                            <p className="text-silver-500 leading-relaxed mb-8">
                                1인 기업 및 스타트업 전환 지원.
                                지분 투자(Equity Partnership)를 통해 공동 성장을 추구합니다.
                            </p>

                            {/* Keywords */}
                            <div className="grid grid-cols-3 gap-3">
                                {businessItems.map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex flex-col items-center gap-2 p-4 rounded-xl bg-silver-300/[0.03] border border-silver-300/5 hover:border-accent-glow/20 transition-colors"
                                    >
                                        <item.icon className="w-5 h-5 text-silver-400" />
                                        <span className="text-xs text-silver-500 font-medium">
                                            {item.label}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <button className="mt-8 text-sm text-accent-glow/80 hover:text-accent-glow font-medium transition-colors">
                                벤처 파트너십 문의 →
                            </button>
                        </div>
                    </motion.div>

                    {/* Government / Public Support */}
                    <motion.div
                        className="glass-card p-10 relative overflow-hidden group"
                        initial={{ opacity: 0, x: 60 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        {/* Background decoration */}
                        <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-purple-500/[0.04] blur-2xl transition-all duration-700 group-hover:bg-purple-500/[0.08]" />

                        <div className="relative z-10">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-6">
                                <Globe className="w-6 h-6 text-purple-300" />
                            </div>

                            <h3 className="text-2xl font-bold text-silver-200 mb-3">
                                Brand Ecosystem
                            </h3>
                            <p className="text-silver-500 leading-relaxed mb-8">
                                단순 커뮤니티가 아닌 '생태계'를 구축합니다.
                                서밋, 쇼케이스, 브랜드 협업을 통해 자산 가치를 극대화합니다.
                            </p>

                            {/* Keywords */}
                            <div className="grid grid-cols-3 gap-3">
                                {supportItems.map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex flex-col items-center gap-2 p-4 rounded-xl bg-silver-300/[0.03] border border-silver-300/5 hover:border-purple-400/20 transition-colors"
                                    >
                                        <item.icon className="w-5 h-5 text-silver-400" />
                                        <span className="text-xs text-silver-500 font-medium">
                                            {item.label}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <button className="mt-8 text-sm text-purple-300/80 hover:text-purple-300 font-medium transition-colors">
                                생태계 합류하기 →
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Stats Row */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    {[
                        { number: '150+', label: '인큐베이팅 팀' },
                        { number: '30+', label: '지분 파트너' },
                        { number: '5k+', label: '생태계 멤버' },
                        { number: '10M+', label: '브랜드 가치' },
                    ].map((stat, i) => (
                        <div
                            key={i}
                            className="glass-card p-6 text-center"
                        >
                            <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">
                                {stat.number}
                            </div>
                            <div className="text-xs text-silver-500 font-medium">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
