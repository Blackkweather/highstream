

const logos = [
    { src: "/HighStream Logos/amazon-prime-video-seeklogo.png", name: "Amazon Prime Video" },
    { src: "/HighStream Logos/apple-tv-seeklogo.png", name: "Apple TV" },
    { src: "/HighStream Logos/bbc-news-seeklogo.png", name: "BBC News" },
    { src: "/HighStream Logos/bundesliga-seeklogo.png", name: "Bundesliga" },
    { src: "/HighStream Logos/cnn-seeklogo.png", name: "CNN" },
    { src: "/HighStream Logos/curiosity-stream-seeklogo.png", name: "Curiosity Stream" },
    { src: "/HighStream Logos/discovery-channel-seeklogo.png", name: "Discovery Channel" },
    { src: "/HighStream Logos/disney-channel-seeklogo.png", name: "Disney Channel" },
    { src: "/HighStream Logos/formula-1-seeklogo.png", name: "Formula 1" },
    { src: "/HighStream Logos/fubotv-seeklogo.png", name: "fuboTV" },
    { src: "/HighStream Logos/hbo-seeklogo.png", name: "HBO" },
    { src: "/HighStream Logos/hulu-seeklogo.png", name: "Hulu" },
    { src: "/HighStream Logos/laliga-seeklogo.png", name: "LaLiga" },
    { src: "/HighStream Logos/major-league-baseball-seeklogo.png", name: "Major League Baseball" },
    { src: "/HighStream Logos/national-geographic-seeklogo.png", name: "National Geographic" },
    { src: "/HighStream Logos/nba-seeklogo.png", name: "NBA" },
    { src: "/HighStream Logos/netflix-seeklogo.png", name: "Netflix" },
    { src: "/HighStream Logos/new-premier-league-2016-17-seeklogo.png", name: "Premier League" },
    { src: "/HighStream Logos/paramount-seeklogo.png", name: "Paramount" },
    { src: "/HighStream Logos/sky-sports-seeklogo.png", name: "Sky Sports" },
    { src: "/HighStream Logos/nfl-seeklogo.png", name: "NFL" },
    { src: "/HighStream Logos/uefa-champions-league-seeklogo.png", name: "UEFA Champions League" },
    { src: "/HighStream Logos/bein-sports-seeklogo.png", name: "beIN Sports" },
    { src: "/HighStream Logos/ufc-seeklogo.png", name: "UFC" },
    { src: "/HighStream Logos/dazn-seeklogo.png", name: "DAZN" },
];
import { useState, useRef } from "react";

export const LogoCarousel = () => {
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const containerRef = useRef(null);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - containerRef.current.offsetLeft);
        setScrollLeft(containerRef.current.scrollLeft);
        containerRef.current.style.cursor = 'grabbing';
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - containerRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        containerRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        containerRef.current.style.cursor = 'grab';
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
        containerRef.current.style.cursor = 'default';
    };

    return (
        <div className="w-full h-full overflow-hidden flex items-center bg-background/80 py-4 md:py-8 lg:py-12">
            <div
                ref={containerRef}
                className="flex animate-scroll scrollbar-hide cursor-grab select-none"
                style={{
                    minWidth: "200%",
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                    width: "max-content"
                }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
            >
                {/* Duplicated once for a seamless infinite loop (translateX -50%) */}
                {[...logos, ...logos].map((logo, idx) => (
                    <div key={idx} className="flex items-center justify-center px-4 sm:px-4 md:px-6 lg:px-8 flex-shrink-0">
                        <img
                            src={logo.src}
                            alt={logo.name}
                            className="h-8 sm:h-12 md:h-12 lg:h-14 xl:h-16 w-auto object-contain max-w-none pointer-events-none"
                            draggable={false}
                            loading={idx < logos.length ? "eager" : "lazy"}
                        />
                    </div>
                ))}
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
                    animation: scroll 20s linear infinite;
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

