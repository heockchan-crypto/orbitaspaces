import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'What We Do', to: '/what-we-do' },
    { label: 'Contact', to: '/#contact' },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogoClick = (e) => {
        e.preventDefault();
        if (location.pathname !== '/') {
            navigate('/');
            // After navigation, scroll to top
            setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handleContactClick = (e) => {
        e.preventDefault();
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 300);
        } else {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const isActive = (to) => {
        if (to === '/') return location.pathname === '/';
        return location.pathname.startsWith(to);
    };

    return (
        <motion.header
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? 'glass py-3 shadow-lg shadow-navy-950/50'
                : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="/" onClick={handleLogoClick} className="flex items-center gap-2 group cursor-pointer">
                    <img src="/logo.jpg" alt="Orbita" className="h-12 w-auto transition-transform group-hover:scale-110 mix-blend-screen filter invert grayscale" />
                    <span className="font-bold text-xl tracking-tight text-silver-400 group-hover:text-accent-cyan transition-colors">
                        ORBITA
                    </span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            onClick={(e) => {
                                if (link.to === '/#contact') {
                                    handleContactClick(e);
                                }
                            }}
                            className={`text-sm font-medium transition-colors duration-300 relative group ${isActive(link.to) ? 'text-white' : 'text-silver-500 hover:text-white'
                                }`}
                        >
                            {link.label}
                            <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent-cyan rounded-full transition-all duration-300 ${isActive(link.to) ? 'w-full' : 'w-0 group-hover:w-full'
                                }`} />
                        </Link>
                    ))}
                </nav>

                {/* CTA + Mobile Toggle */}
                <div className="flex items-center gap-4">
                    <Link to="/login" className="hidden sm:inline-block px-5 py-2 rounded-full border border-white/20 text-sm font-medium hover:bg-white/10 hover:border-accent-cyan hover:text-accent-cyan transition-all">
                        로그인
                    </Link>
                    <Link to="/apply" className="btn-primary !py-2 !px-5 text-sm">
                        지원하기
                    </Link>
                    <button
                        className="md:hidden text-silver-400 hover:text-silver-200 transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass border-t border-silver-300/5 overflow-hidden"
                    >
                        <nav className="flex flex-col gap-1 p-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    onClick={(e) => {
                                        setIsMobileMenuOpen(false);
                                        if (link.to === '/#contact') {
                                            handleContactClick(e);
                                        }
                                    }}
                                    className="text-silver-400 hover:text-white hover:bg-white/5 rounded-xl px-4 py-3 text-sm font-medium transition-all"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link
                                to="/login"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="btn-primary mt-2 text-center"
                            >
                                <span>로그인 / 지원하기</span>
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
