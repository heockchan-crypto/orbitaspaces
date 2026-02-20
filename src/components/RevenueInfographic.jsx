import { motion } from 'framer-motion';
import { BookOpen, Users, Video, Handshake } from 'lucide-react';

const satellites = [
    {
        id: 'edu',
        title: '교육 프로그램',
        en: 'Education',
        icon: BookOpen,
        color: '#00F0FF', // cyan
        desc: '체계적인 커리큘럼 기반 유료 교육',
        position: 'top-left',
    },
    {
        id: 'mentoring',
        title: '멘토링 매칭',
        en: 'Mentoring',
        icon: Users,
        color: '#7000FF', // purple
        desc: '전문가-크리에이터 연결 서비스',
        position: 'top-right',
    },
    {
        id: 'content',
        title: '콘텐츠 제작',
        en: 'Production',
        icon: Video,
        color: '#6BB5FF', // glow/blue
        desc: '기업/기관 콘텐츠 제작 수주',
        position: 'bottom-left',
    },
    {
        id: 'partner',
        title: '파트너십 & 후원',
        en: 'Partnership',
        icon: Handshake,
        color: '#FFFFFF', // white
        desc: 'CSR 파트너십 및 기업 후원',
        position: 'bottom-right',
    },
];

export default function RevenueInfographic() {
    return (
        <div className="w-full max-w-4xl mx-auto py-20 relative">
            {/* Center Node: Orbita */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-space-base border border-white/20 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(0,240,255,0.15)] relative"
                >
                    {/* Inner spinning ring */}
                    <div className="absolute inset-2 rounded-full border border-dashed border-white/20 animate-spin-slow" />

                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-purple">ORBITA</h3>
                    <span className="text-[10px] text-silver-500 font-mono mt-1 tracking-widest">ECOSYSTEM</span>
                </motion.div>
            </div>

            {/* Connecting Lines (Desktop) - SVG Overlay */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block z-0" viewBox="0 0 800 600">
                <defs>
                    <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#00F0FF" stopOpacity="0" />
                        <stop offset="50%" stopColor="#00F0FF" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#00F0FF" stopOpacity="0" />
                    </linearGradient>
                </defs>
                {/* Diagonal lines crossing center */}
                <motion.line
                    x1="200" y1="150" x2="600" y2="450"
                    stroke="url(#lineGrad)" strokeWidth="1"
                    initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5 }}
                />
                <motion.line
                    x1="600" y1="150" x2="200" y2="450"
                    stroke="url(#lineGrad)" strokeWidth="1"
                    initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5 }}
                />
            </svg>

            {/* Satellites Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-64 gap-y-10 md:gap-y-32 relative z-10">
                {satellites.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`flex flex-col ${index % 2 === 0 ? 'md:items-end md:text-right' : 'md:items-start md:text-left'} items-center text-center gap-4 group`}
                        >
                            <div
                                className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/30 group-hover:scale-110"
                                style={{ boxShadow: `0 0 0 1px ${item.color}20` }}
                            >
                                <Icon className="w-8 h-8 transition-colors duration-300" style={{ color: item.color }} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                                <p className="text-xs font-mono uppercase tracking-wider mb-2" style={{ color: item.color }}>{item.en}</p>
                                <p className="text-silver-400 text-sm max-w-[200px]">{item.desc}</p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
