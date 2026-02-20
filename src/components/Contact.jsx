import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="contact" className="relative py-32 px-6" ref={ref}>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-blue/[0.02] to-transparent pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-accent-cyan font-mono text-xs tracking-widest uppercase">
                        // TRANSMISSION
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">Initiate Contact</h2>
                </motion.div>

                <motion.div
                    className="glass-card p-10 md:p-14"
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-silver-400 text-sm font-medium mb-2">이름</label>
                                <input
                                    type="text"
                                    placeholder="홍길동"
                                    className="w-full px-5 py-3.5 rounded-xl bg-navy-800/50 border border-silver-300/10 text-silver-200 placeholder:text-silver-600 focus:outline-none focus:border-accent-glow/30 focus:bg-navy-800/80 transition-all text-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-silver-400 text-sm font-medium mb-2">이메일</label>
                                <input
                                    type="email"
                                    placeholder="hello@example.com"
                                    className="w-full px-5 py-3.5 rounded-xl bg-navy-800/50 border border-silver-300/10 text-silver-200 placeholder:text-silver-600 focus:outline-none focus:border-accent-glow/30 focus:bg-navy-800/80 transition-all text-sm"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-silver-400 text-sm font-medium mb-2">문의 유형</label>
                            <select className="w-full px-5 py-3.5 rounded-xl bg-navy-800/50 border border-silver-300/10 text-silver-400 focus:outline-none focus:border-accent-glow/30 focus:bg-navy-800/80 transition-all text-sm appearance-none">
                                <option>교육 프로그램 문의</option>
                                <option>기업 제휴 문의</option>
                                <option>지원사업 문의</option>
                                <option>기타</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-silver-400 text-sm font-medium mb-2">메시지</label>
                            <textarea
                                rows={5}
                                placeholder="문의 내용을 입력해주세요..."
                                className="w-full px-5 py-3.5 rounded-xl bg-navy-800/50 border border-silver-300/10 text-silver-200 placeholder:text-silver-600 focus:outline-none focus:border-accent-glow/30 focus:bg-navy-800/80 transition-all text-sm resize-none"
                            ></textarea>
                        </div>
                        <button type="submit" className="btn-primary w-full md:w-auto">
                            <span>문의 보내기</span>
                        </button>
                    </form>

                    {/* Contact Info */}
                    <div className="grid md:grid-cols-3 gap-6 mt-10 pt-10 border-t border-silver-300/5">
                        {[
                            { icon: Mail, label: 'contact@orbita.kr' },
                            { icon: Phone, label: '02-1234-5678' },
                            { icon: MapPin, label: '서울특별시 강남구' },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 text-silver-500 text-sm">
                                <item.icon className="w-4 h-4 text-silver-600 flex-shrink-0" />
                                {item.label}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
