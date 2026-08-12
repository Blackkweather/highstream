import { useState, useRef, useEffect } from "react";

const logos = [
    { src: "/Posters/Champions-league.webp", name: "UEFA Champions League" },
    { src: "/Posters/NFL.webp", name: "NFL" },
    { src: "/Posters/Jordan.webp", name: "NBA classics" },
    { src: "/Posters/premier-league.png", name: "Premier League" },
    { src: "/Posters/UFC.webp", name: "UFC" },
    { src: "/Posters/Netflix.webp", name: "Netflix originals" },
    { src: "/Posters/House-of-dragon.webp", name: "House of the Dragon" },
    { src: "/Posters/Squid-game.webp", name: "Squid Game" },
    { src: "/Posters/The-witcher.webp", name: "The Witcher" },
    { src: "/Posters/Carry-on.webp", name: "Carry-On" },
    { src: "/Posters/James-Lebron.webp", name: "NBA — LeBron James" },
    { src: "/Posters/Messi-Lamin-yamal.webp", name: "Football — Messi & Lamine Yamal" },
];

export const PostersCarousel = () => {
    const [isDragging, setIsDragging] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const containerRef = useRef(null);

    // Two copies is the minimum needed for a seamless loop: the CSS animation
    // travels exactly -50% (one full set width), and the scroll-reset effect
    // below jumps back by exactly one set width too.
    const duplicatedLogos = [...logos, ...logos];

    // Gestion du drag avec la souris
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setIsPaused(true); // Pause l'animation pendant le drag
        setStartX(e.pageX - containerRef.current.offsetLeft);
        setScrollLeft(containerRef.current.scrollLeft);
        containerRef.current.style.cursor = 'grabbing';
        e.preventDefault(); // Empêche la sélection de texte
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - containerRef.current.offsetLeft;
        const walk = (x - startX) * 1.5; // Sensibilité du drag
        containerRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        setIsPaused(false); // Reprend l'animation
        if (containerRef.current) {
            containerRef.current.style.cursor = 'grab';
        }
    };

    const handleMouseLeave = () => {
        if (isDragging) {
            setIsDragging(false);
            setIsPaused(false);
            if (containerRef.current) {
                containerRef.current.style.cursor = 'default';
            }
        }
    };

    // Pause/reprend l'animation au survol
    const handleMouseEnter = () => {
        if (!isDragging) {
            setIsPaused(true);
        }
    };

    const handleMouseLeaveContainer = () => {
        if (!isDragging) {
            setIsPaused(false);
        }
    };

    // Gestion du défilement avec la molette de la souris
    const handleWheel = (e) => {
        e.preventDefault();
        const scrollAmount = e.deltaY * 0.5; // Sensibilité de la molette
        containerRef.current.scrollLeft += scrollAmount;
        
        // Pause temporaire de l'animation lors du scroll
        setIsPaused(true);
        
        // Timer pour reprendre l'animation après le scroll
        clearTimeout(containerRef.current.scrollTimeout);
        containerRef.current.scrollTimeout = setTimeout(() => {
            setIsPaused(false);
        }, 1000);
    };

    // Effet pour gérer les événements globaux de la souris
    useEffect(() => {
        const handleGlobalMouseUp = () => {
            if (isDragging) {
                setIsDragging(false);
                setIsPaused(false);
            }
        };

        const handleGlobalMouseMove = (e) => {
            if (isDragging && containerRef.current) {
                const x = e.pageX - containerRef.current.offsetLeft;
                const walk = (x - startX) * 1.5;
                containerRef.current.scrollLeft = scrollLeft - walk;
            }
        };

        if (isDragging) {
            document.addEventListener('mouseup', handleGlobalMouseUp);
            document.addEventListener('mousemove', handleGlobalMouseMove);
        }

        return () => {
            document.removeEventListener('mouseup', handleGlobalMouseUp);
            document.removeEventListener('mousemove', handleGlobalMouseMove);
        };
    }, [isDragging, startX, scrollLeft]);

    // Gestion du défilement infini
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleScroll = () => {
            const maxScrollLeft = container.scrollWidth - container.clientWidth;
            const scrollPosition = container.scrollLeft;

            // Reset la position si on arrive à la fin
            if (scrollPosition >= maxScrollLeft - 10) {
                container.scrollLeft = scrollPosition - (logos.length * 224); // 200px + 24px gap
            } else if (scrollPosition <= 10) {
                container.scrollLeft = scrollPosition + (logos.length * 224);
            }
        };

        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="w-full h-full overflow-hidden flex items-center bg-card/80 py-4 md:py-8 lg:py-12">
            <div className="relative w-full overflow-hidden">
                <div 
                    ref={containerRef}
                    className={`flex  cursor-grab select-none scrollbar-hide ${isPaused ? '' : 'animate-scroll'}`}
                    style={{ 
                        minWidth: "200%",
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                        overflowX: "scroll"
                    }}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseLeaveContainer}
                    onWheel={handleWheel}
                >
                    {duplicatedLogos.map((logo, idx) => (
                   <div key={idx} className="flex items-center justify-center px-2 sm:px-2 md:px-2 lg:px-1 flex-shrink-0">
                            {/* Poster ratio is fixed at 280:500 — the mobile step-down keeps
                                that ratio so a phone shows a poster, not a billboard. */}
                            <img
                                src={logo.src}
                                alt={logo.name}
                                className="pointer-events-none rounded-lg h-[260px] w-[146px] object-cover sm:h-[360px] sm:w-[202px] lg:h-[500px] lg:w-[280px]"
                                draggable={false}
                                loading={idx < logos.length ? "eager" : "lazy"}
                                width={280}
                                height={500}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                       transform: translateX(-50%);
                    }
                }

                .animate-scroll {
                    animation: scroll 10s linear infinite;
                }

                /* Masquer les barres de défilement */
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>
    );
};