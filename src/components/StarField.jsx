import { useEffect, useRef } from 'react';

export default function StarField() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationId;
        let stars = [];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const createStars = () => {
            stars = [];
            const count = Math.floor((canvas.width * canvas.height) / 8000);
            for (let i = 0; i < count; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 1.5 + 0.3,
                    opacity: Math.random() * 0.6 + 0.1,
                    speed: Math.random() * 0.0008 + 0.0002,
                    phase: Math.random() * Math.PI * 2,
                });
            }
        };

        const draw = (time) => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            stars.forEach((star) => {
                const twinkle = Math.sin(time * star.speed + star.phase) * 0.3 + 0.7;
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(200, 215, 240, ${star.opacity * twinkle})`;
                ctx.fill();
            });

            animationId = requestAnimationFrame(draw);
        };

        resize();
        createStars();
        animationId = requestAnimationFrame(draw);

        window.addEventListener('resize', () => {
            resize();
            createStars();
        });

        return () => cancelAnimationFrame(animationId);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{ opacity: 0.7 }}
        />
    );
}
