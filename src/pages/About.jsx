import { motion } from 'framer-motion';
import { Building2, User, BookOpen, TrendingUp, Users } from 'lucide-react';
import SectionHorizon from '../components/SectionHorizon';
import RevenueInfographic from '../components/RevenueInfographic';

const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7 },
};

const sections = [
    {
        id: 'company',
        icon: Building2,
        title: '회사 소개',
        subtitle: 'About Orbita',
        content: (
            <div className="space-y-6">
                <p className="text-silver-300 text-lg leading-relaxed">
                    오르비타(Orbita)는 크리에이터가 자신만의 궤도를 찾아 빛날 수 있도록 돕는
                    <span className="text-white font-semibold"> 크리에이터 인큐베이팅 전문 소셜벤처</span>입니다.
                </p>
                <p className="text-silver-400 leading-relaxed">
                    우리는 가능성을 자산으로 전환하는 체계적인 시스템을 구축하여,
                    누구나 창작의 가치를 실현할 수 있는 환경을 만들어갑니다.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                    {[
                        { label: '설립', value: '2024' },
                        { label: '소재지', value: '서울' },
                        { label: '분류', value: '소셜벤처' },
                        { label: '분야', value: '크리에이터 교육' },
                    ].map((item) => (
                        <div key={item.label} className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                            <div className="text-2xl font-bold text-white mb-1">{item.value}</div>
                            <div className="text-xs text-silver-500 font-mono uppercase">{item.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        ),
    },
    {
        id: 'ceo',
        icon: User,
        title: '대표 소개',
        subtitle: 'CEO',
        content: (
            <div className="flex flex-col md:flex-row gap-10 items-start">
                <div className="w-full md:w-1/3">
                    <div className="w-48 h-48 mx-auto rounded-2xl bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 border border-white/10 flex items-center justify-center">
                        <User className="w-20 h-20 text-silver-500" />
                    </div>
                </div>
                <div className="w-full md:w-2/3 space-y-4">
                    <h3 className="text-3xl font-bold text-white">Woo Young</h3>
                    <p className="text-accent-cyan font-mono text-sm">Founder & CEO</p>
                    <p className="text-silver-300 leading-relaxed">
                        크리에이터 생태계의 선순환을 꿈꾸며 오르비타를 설립했습니다.
                        교육과 기술을 통해 더 많은 사람들이 창작의 기회를 얻을 수 있도록 노력하고 있습니다.
                    </p>
                    <blockquote className="border-l-2 border-accent-cyan pl-4 text-silver-400 italic mt-6">
                        "가능성을 발견하고, 그것을 자산으로 만드는 것이 우리의 미션입니다."
                    </blockquote>
                </div>
            </div>
        ),
    },
    {
        id: 'philosophy',
        icon: BookOpen,
        title: '교육 이념',
        subtitle: 'Education Philosophy',
        content: (
            <div className="space-y-8">
                <p className="text-silver-300 text-lg leading-relaxed">
                    오르비타의 교육은 <span className="text-white font-semibold">세 가지 핵심 원칙</span>에 기반합니다.
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            num: '01',
                            title: '자기주도 학습',
                            desc: '스스로 방향을 잡고 성장할 수 있는 환경을 제공합니다.',
                        },
                        {
                            num: '02',
                            title: '실전 중심 교육',
                            desc: '이론보다 실제 창작 경험을 통해 역량을 키웁니다.',
                        },
                        {
                            num: '03',
                            title: '선순환 생태계',
                            desc: '배움을 나누고 성장을 공유하는 커뮤니티를 형성합니다.',
                        },
                    ].map((item) => (
                        <div key={item.num} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-accent-cyan/30 transition-colors group">
                            <span className="text-accent-cyan font-mono text-xl mb-4 block">{item.num}</span>
                            <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                            <p className="text-silver-400 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        ),
    },
    {
        id: 'revenue',
        icon: TrendingUp,
        title: '수익 구조',
        subtitle: 'Revenue Model',
        content: <RevenueInfographic />,
    },
    {
        id: 'org',
        icon: Users,
        title: '조직도',
        subtitle: 'Organization',
        content: (
            <div className="flex flex-col items-center space-y-8">
                {/* CEO */}
                <div className="text-center">
                    <div className="px-8 py-4 rounded-2xl bg-gradient-to-r from-accent-cyan/20 to-accent-purple/20 border border-white/20 inline-block">
                        <div className="text-xl font-bold text-white">CEO</div>
                        <div className="text-sm text-silver-400">Woo Young</div>
                    </div>
                </div>
                {/* Connector */}
                <div className="w-px h-8 bg-white/20" />
                {/* Departments */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-3xl">
                    {[
                        { name: '교육팀', desc: 'Education' },
                        { name: '콘텐츠팀', desc: 'Content' },
                        { name: '파트너십팀', desc: 'Partnership' },
                        { name: '운영팀', desc: 'Operations' },
                    ].map((dept) => (
                        <div key={dept.name} className="text-center p-5 rounded-xl bg-white/5 border border-white/10 hover:border-accent-cyan/30 transition-colors">
                            <div className="text-lg font-bold text-white mb-1">{dept.name}</div>
                            <div className="text-xs text-silver-500 font-mono">{dept.desc}</div>
                        </div>
                    ))}
                </div>
            </div>
        ),
    },
];

export default function About() {
    return (
        <div className="min-h-screen bg-space-base pt-28 pb-20">
            {/* Page Header */}
            <motion.div
                className="max-w-7xl mx-auto px-6 mb-20"
                {...fadeUp}
            >
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 font-merriweather italic">
                    About
                </h1>
                <p className="text-xl text-silver-400 font-light">
                    오르비타의 비전, 구조, 그리고 사람들을 소개합니다.
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple mt-8 rounded-full" />
            </motion.div>

            {/* Sections */}
            <div className="max-w-7xl mx-auto px-6 space-y-32">
                {sections.map((section, i) => {
                    const Icon = section.icon;
                    return (
                        <motion.section
                            key={section.id}
                            id={section.id}
                            {...fadeUp}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="relative pb-20" // Add padding for horizon
                        >
                            {/* Section Header */}
                            <div className="flex items-center gap-4 mb-10 relative z-10">
                                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                                    <Icon className="w-6 h-6 text-accent-cyan" />
                                </div>
                                <div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-white">{section.title}</h2>
                                    <p className="text-sm text-silver-500 font-mono uppercase tracking-widest">{section.subtitle}</p>
                                </div>
                            </div>
                            {/* Section Content */}
                            <div className="ml-0 md:ml-16 relative z-10">
                                {section.content}
                            </div>

                            {/* Horizon Effect at bottom of section */}
                            <SectionHorizon className="opacity-60" />
                        </motion.section>
                    );
                })}
            </div>
        </div>
    );
}
