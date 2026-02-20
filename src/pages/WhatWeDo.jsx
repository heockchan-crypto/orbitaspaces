import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Layers, Lightbulb, Handshake, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHorizon from '../components/SectionHorizon';

const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7 },
};

const models = [
    {
        icon: Layers,
        num: '01',
        title: '크리에이터 인큐베이팅',
        subtitle: 'Creator Incubating',
        desc: '체계적인 커리큘럼을 통해 크리에이터로서 필요한 핵심 역량을 기릅니다.',
        details: ['기초 소양 교육', '실전 콘텐츠 제작', '브랜딩 워크샵', '저작권 및 윤리 교육'],
        color: 'accent-cyan',
    },
    {
        icon: Lightbulb,
        num: '02',
        title: '멘토링 시스템',
        subtitle: 'Mentoring System',
        desc: '현업 전문가와 1:1 매칭을 통해 실질적인 조언과 인사이트를 제공합니다.',
        details: ['정기 멘토링', '포트폴리오 리뷰', '진로 상담', '네트워킹 데이'],
        color: 'accent-purple',
    },
    {
        icon: Handshake,
        num: '03',
        title: '파이낸싱 & 지원',
        subtitle: 'Financing & Support',
        desc: '초기 창작 활동에 필요한 공간, 장비, 자금을 지원합니다.',
        details: ['창작 지원금', '스튜디오 대관', '장비 대여', '프로젝트 펀딩'],
        color: 'accent-glow',
    },
    {
        icon: BarChart3,
        num: '04',
        title: '커뮤니티 & 연구',
        subtitle: 'Community & Research',
        desc: '지속 가능한 크리에이터 생태계를 위한 연구와 교류 활동을 지원합니다.',
        details: ['알럼나이 커뮤니티', '창작 생태계 포럼', '트렌드 리포트 발간'],
        color: 'white',
    },
];

export default function WhatWeDo({ isSection = false }) {
    // If rendered as a section (on Landing), show a condensed version
    if (isSection) {
        return (
            <div className="w-full h-full flex flex-col justify-center py-0">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        className="mb-12"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-merriweather italic">
                            What We Do
                        </h1>
                        <p className="text-xl text-silver-400 max-w-3xl leading-relaxed font-light">
                            오르비타는 단순한 기술 전수를 넘어, 창작자가 자립하고
                            사회에 긍정적인 영향을 미칠 수 있도록 전방위적인 지원을 합니다.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                        {models.map((m, i) => (
                            <div key={i} className="group">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="text-accent-cyan font-mono text-xl">{m.num}</span>
                                    <div className="h-px bg-white/20 flex-1 group-hover:bg-accent-cyan transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{m.title}</h3>
                                <p className="text-silver-400 text-sm">{m.desc}</p>
                            </div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false }}
                        className="mt-12"
                    >
                        <Link to="/what-we-do" className="text-accent-cyan text-sm hover:text-white flex items-center gap-2 transition-colors font-mono">
                            자세히 보기 <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        );
    }

    // Full page view
    return (
        <div className="min-h-screen bg-space-base pt-28 pb-20">
            {/* Page Header */}
            <motion.div className="max-w-7xl mx-auto px-6 mb-20" {...fadeUp}>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 font-merriweather italic">
                    What We Do
                </h1>
                <p className="text-xl text-silver-400 font-light max-w-3xl">
                    오르비타는 수익 구조에 따른 다양한 모델을 통해 크리에이터 생태계의 선순환을 만들어갑니다.
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple mt-8 rounded-full" />
            </motion.div>

            {/* Model Cards */}
            <div className="max-w-7xl mx-auto px-6 space-y-24">
                {models.map((model, i) => {
                    const Icon = model.icon;
                    return (
                        <motion.section
                            key={model.num}
                            {...fadeUp}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="group relative pb-24 mb-24"
                        >
                            <div className="grid md:grid-cols-5 gap-10 items-start relative z-10">
                                {/* Left: Number + Icon */}
                                <div className="md:col-span-1 flex md:flex-col items-center md:items-start gap-4">
                                    <span className={`text-5xl font-bold font-mono text-${model.color} opacity-30`}>
                                        {model.num}
                                    </span>
                                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-accent-cyan/30 transition-colors">
                                        <Icon className={`w-8 h-8 text-${model.color}`} />
                                    </div>
                                </div>

                                {/* Right: Content */}
                                <div className="md:col-span-4">
                                    <h2 className="text-3xl font-bold text-white mb-2">{model.title}</h2>
                                    <p className="text-sm text-silver-500 font-mono uppercase tracking-widest mb-6">{model.subtitle}</p>
                                    <p className="text-silver-300 text-lg leading-relaxed mb-8">
                                        {model.desc}
                                    </p>
                                    <ul className="grid grid-cols-2 gap-4">
                                        {model.details.map((detail, j) => (
                                            <li key={j} className="flex items-center gap-3 text-sm text-silver-300">
                                                <CheckCircle2 className="w-4 h-4 text-accent-purple shrink-0" />
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Horizon Divider */}
                            {i < models.length - 1 && (
                                <SectionHorizon className="opacity-40" />
                            )}
                        </motion.section>
                    );
                })}
            </div>
        </div>
    );
}
