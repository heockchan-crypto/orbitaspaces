import { motion } from 'framer-motion';
import { Play, Star, TrendingUp, Users, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import IncubationVideo from './IncubationVideo';

const roadmapSteps = [
    {
        id: 1,
        title: 'Discovery',
        subtitle: '재능 발견',
        description: '자신만의 고유한 재능을 발굴하고 방향성을 설계합니다.',
        icon: '🔭',
        color: 'from-accent-cyan to-blue-500',
    },
    {
        id: 2,
        title: 'Development',
        subtitle: '역량 강화',
        description: '콘텐츠 제작 능력과 브랜드 자산을 구체화합니다.',
        icon: '⚡',
        color: 'from-accent-purple to-pink-500',
    },
    {
        id: 3,
        title: 'Positioning',
        subtitle: '시장 진입',
        description: '퍼스널 브랜드를 확립하고 시장 내 입지를 굳힙니다.',
        icon: '🚩',
        color: 'from-amber-400 to-orange-500',
    },
];

export default function Education() {
    return (
        <section id="education" className="relative py-32 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">

                {/* Section Header */}
                <div className="text-center mb-20">
                    <span className="text-accent-cyan font-mono text-xs tracking-widest uppercase">
            // INCUBATION_SYSTEM
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
                        Creator <span className="text-gradient">Growth Track</span>
                    </h2>
                    <p className="text-silver-400 max-w-2xl mx-auto text-lg">
                        교육이 아닌 성장 인큐베이팅. 당신의 재능을 자산으로 전환합니다.
                    </p>
                </div>

                {/* 1. Roadmap Visualization */}
                <div className="relative mb-32 hidden md:block">
                    {/* Connecting Line (SVG) */}
                    <svg className="absolute top-1/2 left-0 w-full h-20 -translate-y-1/2 z-0" overflow="visible">
                        <path
                            d="M0,40 C200,40 200,40 400,40 C600,40 600,-40 800,-40 C1000,-40 1000,40 1200,40"
                            fill="none"
                            stroke="url(#gradient-line)"
                            strokeWidth="2"
                            strokeDasharray="8 4"
                            className="animate-float"
                        />
                        <defs>
                            <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.2" />
                                <stop offset="50%" stopColor="#7000FF" stopOpacity="0.8" />
                                <stop offset="100%" stopColor="#00F0FF" stopOpacity="0.2" />
                            </linearGradient>
                        </defs>
                    </svg>

                    <div className="grid grid-cols-3 gap-8 relative z-10">
                        {roadmapSteps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="text-center relative group"
                            >
                                {/* Node */}
                                <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${step.color} p-0.5 mb-6 relative z-10 tech-border`}>
                                    <div className="w-full h-full bg-space-base rounded-full flex items-center justify-center text-3xl shadow-[0_0_30px_rgba(0,240,255,0.2)] group-hover:shadow-[0_0_50px_rgba(112,0,255,0.4)] transition-shadow duration-500">
                                        {step.icon}
                                    </div>
                                </div>

                                {/* Connector Dot */}
                                <div className="absolute top-10 left-1/2 -translate-x-1/2 w-4 h-4 bg-space-base border-2 border-white rounded-full z-20" />

                                <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                                <span className="text-accent-cyan font-mono text-xs uppercase tracking-wider block mb-3">
                                    {step.subtitle}
                                </span>
                                <p className="text-silver-500 text-sm max-w-xs mx-auto">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* 2. Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 grid-rows-[auto]">


                    {/* Large Cell: Masterclass Preview */}
                    <div className="col-span-1 md:col-span-8 glass-card min-h-[400px] flex flex-col justify-between relative overflow-hidden group p-0">
                        {/* Video Component Background */}
                        <div className="absolute inset-0 z-0">
                            <IncubationVideo />
                        </div>

                        {/* Overlay Content */}
                        <div className="relative z-10 p-8 h-full flex flex-col justify-between bg-gradient-to-t from-space-base/80 via-transparent to-space-base/20 pointer-events-none">
                            <div>
                                <span className="bg-accent-purple/20 text-accent-purple border border-accent-purple/30 px-3 py-1 rounded-full text-xs font-mono backdrop-blur-md">
                                    INCUBATING_PROGRAM
                                </span>
                                <h3 className="text-3xl font-bold text-white mt-4 max-w-md drop-shadow-lg">
                                    Build Your <br />
                                    <span className="text-gradient">Creator Asset</span>
                                </h3>
                            </div>

                            <button className="self-start relative z-10 pointer-events-auto px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-accent-cyan/20 group-hover:border-accent-cyan/50 transition-all duration-300">
                                <span className="text-white font-medium mr-2">Watch Process</span>
                                <Play className="w-4 h-4 text-white fill-white" />
                            </button>
                        </div>
                    </div>

                    {/* Medium Cell: Stats */}
                    <div className="col-span-1 md:col-span-4 glass-card p-8 flex flex-col justify-center text-center">
                        <div className="w-16 h-16 mx-auto rounded-full bg-accent-cyan/10 flex items-center justify-center mb-6">
                            <TrendingUp className="w-8 h-8 text-accent-cyan" />
                        </div>
                        <div className="text-5xl font-mono font-bold text-white mb-2">98%</div>
                        <p className="text-silver-500 text-sm uppercase tracking-wide">Satisfaction Rate</p>
                    </div>

                    {/* Medium Cell: Testimonial */}
                    <div className="col-span-1 md:col-span-4 glass-card p-8">
                        <div className="flex gap-1 mb-6">
                            {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />)}
                        </div>
                        <p className="text-silver-300 text-lg leading-relaxed mb-6 font-light">
                            "단순한 스킬업이 아니라, 제 <span className="text-white font-medium">비즈니스 모델</span> 그 자체를 만들어줬습니다. 0에서 브랜드가 되기까지."
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-silver-700 overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" alt="Reviewer" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <div className="text-white text-sm font-bold">김O영 님</div>
                                <div className="text-silver-600 text-xs text-accent-purple">인큐베이팅 3기 수료</div>
                            </div>
                        </div>
                    </div>

                    {/* Medium Cell: Features List */}
                    <div className="col-span-1 md:col-span-4 glass-card p-8">
                        <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                            <CheckCircle2 className="text-accent-cyan" />
                            Included Access
                        </h3>
                        <ul className="space-y-4">
                            {['Weekly Live Mentoring', 'Private Discord Community', 'Resource Library', 'Brand Deal Matching'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-silver-400 text-sm">
                                    <div className="w-1.5 h-1.5 rounded-full bg-accent-purple" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Small Cell: Join CTA */}
                    <div className="col-span-1 md:col-span-4 glass-card bg-gradient-to-br from-accent-purple/20 to-space-base p-8 flex flex-col items-center justify-center text-center hover:border-accent-purple/50 transition-colors">
                        <h3 className="text-xl font-bold text-white mb-4">Start Now</h3>
                        <p className="text-silver-500 text-xs mb-6">Join the next cohort closing in 2 days.</p>
                        <Link to="/apply" className="btn-secondary w-full inline-block text-center">Apply</Link>
                    </div>

                </div>
            </div>
        </section>
    );
}
