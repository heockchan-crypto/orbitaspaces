export default function Footer() {
    return (
        <footer className="relative py-16 px-6 border-t border-white/10 bg-space-base">
            <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Logo & Info */}
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <div className="flex items-center gap-3">
                            <img
                                src="/logo.jpg"
                                alt="Orbita"
                                className="h-10 w-auto mix-blend-screen filter invert grayscale"
                            />
                        </div>
                        <p className="text-silver-600 text-xs leading-relaxed text-center md:text-left max-w-md font-mono">
                            (주) 오르비타 | CEO: Woo Young<br />
                            Reg. No: 000-00-00000<br />
                            Gangnam-gu, Seoul, Korea
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex flex-col items-center md:items-end gap-4">
                        {/* Social Links */}
                        <div className="flex items-center gap-4">
                            <a
                                href="#"
                                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-silver-600 hover:text-accent-cyan hover:border-accent-cyan/30 transition-all hover:shadow-[0_0_15px_rgba(0,240,255,0.2)]"
                                aria-label="YouTube"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-silver-600 hover:text-accent-cyan hover:border-accent-cyan/30 transition-all hover:shadow-[0_0_15px_rgba(0,240,255,0.2)]"
                                aria-label="Instagram"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947C23.727 2.694 21.305.274 16.949.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                </svg>
                            </a>
                        </div>

                        <p className="text-silver-600 text-[10px] font-mono tracking-widest uppercase">
              // SYSTEM_ONLINE
                            <span className="ml-2">© 2026 ORBITA</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
