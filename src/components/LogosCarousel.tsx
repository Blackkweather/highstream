

const logos = [
    "/HighStream Logos/amazon-prime-video-seeklogo.png",
    "/HighStream Logos/apple-tv-seeklogo.png",
    "/HighStream Logos/bbc-news-seeklogo.png",
    "/HighStream Logos/bundesliga-seeklogo.png",
    "/HighStream Logos/cnn-seeklogo.png",
    "/HighStream Logos/curiosity-stream-seeklogo.png",
    "/HighStream Logos/discovery-channel-seeklogo.png",
    "/HighStream Logos/disney-channel-seeklogo.png",
    "/HighStream Logos/formula-1-seeklogo.png",
    "/HighStream Logos/fubotv-seeklogo.png",
    "/HighStream Logos/hbo-seeklogo.png",
    "/HighStream Logos/hulu-seeklogo.png",
    "/HighStream Logos/laliga-seeklogo.png",
    "/HighStream Logos/major-league-baseball-seeklogo.png",
    "/HighStream Logos/national-geographic-seeklogo.png",
    "/HighStream Logos/nba-seeklogo.png",
    "/HighStream Logos/netflix-seeklogo.png",
    "/HighStream Logos/new-premier-league-2016-17-seeklogo.png",
    "/HighStream Logos/paramount-seeklogo.png",
    "/HighStream Logos/sky-sports-seeklogo.png",
    "/HighStream Logos/nfl-seeklogo.png",
    "/HighStream Logos/uefa-champions-league-seeklogo.png",
    "/HighStream Logos/bein-sports-seeklogo.png",
    "/HighStream Logos/ufc-seeklogo.png",
     "/HighStream Logos/dazn-seeklogo.png",
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
                {/* Triple les logos pour un défilement infini vraiment fluide */}
                {[...logos, ...logos, ...logos].map((logo, idx) => (
                    <div key={idx} className="flex items-center justify-center px-4 sm:px-4 md:px-6 lg:px-8 flex-shrink-0">
                        <img
                            src={logo}
                            alt={`Logo ${idx + 1}`}
                            className="h-8 sm:h-12 md:h-12 lg:h-14 xl:h-16 w-auto object-contain max-w-none pointer-events-none"
                            draggable={false}
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

