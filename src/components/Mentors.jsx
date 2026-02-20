import { motion } from 'framer-motion';
import { ArrowUpRight, Users, Star, TrendingUp } from 'lucide-react';

const ventures = [
    {
        title: '프로 보컬 트레이닝 클래스',
        creator: 'By 김나영',
        image: 'https://images.unsplash.com/photo-1516280440614-6697288d5d38?auto=format&fit=crop&q=80&w=400',
        category: 'Education',
        stats: { students: '1,200+', rating: '4.9' },
        link: '#',
    },
    {
        title: '친환경 패션 브랜드',
        creator: 'By 이민호',
        image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=400',
        category: 'Brand',
        stats: { revenue: '$20K/mo', launch: '2025' },
        link: '#',
    },
    {
        title: '테크 리뷰 커뮤니티',
        creator: 'By 테크준',
        image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=400',
        category: 'Community',
        stats: { members: '45K', growth: '+150%' },
        link: '#',
    },
    {
        title: '시네마틱 브이로그 프리셋',
        creator: 'By Sarah Art',
        image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&q=80&w=400',
        category: 'Digital Product',
        stats: { sales: '5,000+', rating: '5.0' },
        link: '#',
    },
];

export default function Mentors() {
    return (
        <section className="relative py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                    <div>
                        <span className="text-accent-cyan font-mono text-xs tracking-widest uppercase">
              // LAUNCHED_VENTURES
                        </span>
                        <h2 className="text-4xl font-bold text-white mt-4">
                            Creator <span className="text-gradient">Ventures</span>
                        </h2>
                        <p className="text-silver-400 mt-4 max-w-2xl text-lg">
                            오르비타는 단순한 교육을 넘어, 크리에이터의 실제 비즈니스 런칭을 함께합니다.
                            <br className="hidden sm:block" />
                            인큐베이팅을 통해 탄생한 성공적인 프로젝트들을 만나보세요.
                        </p>
                    </div>
                    <button className="btn-secondary flex items-center gap-2">
                        전체 프로젝트 보기 <ArrowUpRight size={16} />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {ventures.map((venture, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-zinc-900/50 border border-white/5 rounded-2xl overflow-hidden group hover:border-accent-purple/30 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(112,0,255,0.15)]"
                        >
                            {/* Image Area */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={venture.image}
                                    alt={venture.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-3 left-3 bg-space-base/60 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-mono text-white border border-white/10">
                                    {venture.category}
                                </div>
                            </div>

                            {/* Content Area */}
                            <div className="p-5">
                                <h3 className="text-lg font-bold text-white mb-1 leading-snug group-hover:text-accent-purple transition-colors">
                                    {venture.title}
                                </h3>
                                <p className="text-sm text-silver-500 mb-4">{venture.creator}</p>

                                {/* Stats Row */}
                                <div className="flex items-center justify-between py-3 border-t border-white/5">
                                    <div className="flex items-center gap-1.5">
                                        <Users size={14} className="text-silver-600" />
                                        <span className="text-xs font-mono text-silver-400">
                                            {venture.stats.students || venture.stats.members || venture.stats.sales || venture.stats.revenue}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Star size={14} className="text-yellow-500 fill-yellow-500" />
                                        <span className="text-xs font-mono text-silver-400">
                                            {venture.stats.rating || venture.stats.growth || venture.stats.launch}
                                        </span>
                                    </div>
                                </div>

                                <button className="w-full mt-2 py-2 text-xs font-medium text-white bg-white/5 rounded hover:bg-accent-purple hover:text-white transition-colors">
                                    프로젝트 보기
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}


