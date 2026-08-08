import React, { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

// Import review images
import review1 from "/reviews/pic1.jpg";
import review2 from "/reviews/pic2.jpg";
import review3 from "/reviews/pic3.jpg";
import review4 from "/reviews/pic4.jpg";
import review5 from "/reviews/pic5.jpg";
import review6 from "/reviews/pic6.jpg";
import review7 from "/reviews/pic7.jpg";
import review8 from "/reviews/pic8.jpg";
import { useLanguage } from '@/contexts/LanguageContext';

interface ReviewData {
  id: number;
  image: string;
  alt: string;
}

const reviews: ReviewData[] = [
  { id: 1, image: review1, alt: 'Customer review interface with 5-star rating' },
  { id: 2, image: review2, alt: 'Customer testimonial with user profile' },
  { id: 3, image: review3, alt: 'Review platform with customer feedback' },
  { id: 4, image: review4, alt: 'Customer review card with rating stars' },
  { id: 5, image: review5, alt: 'Professional testimonial interface' },
  { id: 6, image: review6, alt: 'Customer testimonial platform' },
  { id: 7, image: review7, alt: 'Best IPTV services' },
  { id: 8, image: review8, alt: '5-star rating' },
];

interface CustomerReviewsCarouselProps {
  className?: string;
  autoplayInterval?: number;
}

const ReviewsCarousel: React.FC<CustomerReviewsCarouselProps> = ({
  className,
  autoplayInterval = 4000,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      slidesToScroll: 1,
      containScroll: 'trimSnaps',
    },
    [Autoplay({ delay: autoplayInterval, stopOnInteraction: false }) as never]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const currentIndex = emblaApi.selectedScrollSnap();
    setSelectedIndex(currentIndex);
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  // Calculate total slides for dots
  const totalSlides = 2; // Desktop: 2 groups (3+3 images)
  const totalSlidesMobile = reviews.length; // Mobile: 6 individual slides
  const { t } = useLanguage();
  return (
    <div className={cn('w-full max-w-7xl mx-auto px-4', className)}>
      {/* Section Header */}
      <div className="text-center  mb-12 mt-12">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" 
            data-aos="fade-up" data-aos-delay="200">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t('testimonials.title')}
          </span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto" 
        data-aos="fade-up" data-aos-delay="400">
          {/* Real feedback from real customers using HighStream every day */}
          {t('testimonials.subtitle')}
        </p>
      </div>


      {/* Carousel Container */}
      <div className="relative" data-aos="fade-up" data-aos-delay="600">
        {/* Embla Viewport */}
        <div
          ref={emblaRef}
          className="overflow-hidden rounded-xl shadow-carousel"
        >
          <div className="flex">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="flex-[0_0_100%] md:flex-[0_0_33.333%] pl-4 first:pl-0"
              >
                <div className=" rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="sm:w-[98%] lg:w-[98%] r  rounded-lg overflow-hidden flex items-center justify-center mx-auto">
                    <img
                      src={review.image}
                      alt={review.alt}
                      className="w-full h-full aspect-[3/6]   transition-transform duration-300 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className={cn(
            'absolute left-0 top-1/2 -translate-y-1/2 z-10',
            'w-12 h-12 ',
            'flex items-center justify-center',
            '',
            'transition-all duration-300',
            'hover:bg-carousel-nav-hover hover:text-primary-foreground',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            'hidden md:flex'
          )}
          style={{
            color: '#25d366',
          }}
        >
          <ChevronLeft className="w-7 h-7" />
        </button>

        <button
          onClick={scrollNext}
          disabled={!canScrollNext}
          className={cn(
            'absolute right-0 top-1/2 -translate-y-1/2 z-10',
            'w-12 h-12',
            'flex items-center justify-center',
            'transition-all duration-300',
            'hover:bg-carousel-nav-hover hover:text-primary-foreground',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            'hidden md:flex'
          )}
           style={{
            color: '#25d366',
          }}
        >
          <ChevronRight className="w-7 h-7" />
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-8 gap-2">
        {/* Desktop dots */}
        <div className="hidden md:flex gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => {
            // On desktop: index 0-2 = first group (dot 0), index 3-5 = second group (dot 1)
            const isActive = Math.floor(selectedIndex / 3) === index;
            return (
              <button
                key={index}
                onClick={() => scrollTo(index * 3)}
                className={cn(
                  'w-3 h-3 rounded-full transition-all duration-300',
                  isActive
                    ? 'bg-carousel-dot-active scale-110'
                    : 'bg-carousel-dot hover:bg-carousel-dot-active/60'
                )}
                aria-label={`Aller au slide ${index + 1}`}
              />
            );
          })}
        </div>

        {/* Mobile dots */}
        <div className="flex md:hidden gap-2">
          {Array.from({ length: totalSlidesMobile }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(
                'w-3 h-3 rounded-full transition-all duration-300',
                index === selectedIndex
                  ? 'bg-carousel-dot-active scale-110'
                  : 'bg-carousel-dot hover:bg-carousel-dot-active/60'
              )}
              aria-label={`Aller au slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Mobile Navigation Buttons */}
      <div className="flex md:hidden justify-center gap-4 mt-6">
        <button
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className={cn(
            'w-12 h-12 rounded-full shadow-lg',
            'flex items-center justify-center',
            'bg-carousel-nav-bg border border-border',
            'transition-all duration-300',
            'hover:bg-carousel-nav-hover hover:text-primary-foreground',
            'disabled:opacity-50 disabled:cursor-not-allowed'
          )}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={scrollNext}
          disabled={!canScrollNext}
          className={cn(
            'w-12 h-12 rounded-full shadow-lg',
            'flex items-center justify-center',
            'bg-carousel-nav-bg border border-border',
            'transition-all duration-300',
            'hover:bg-carousel-nav-hover hover:text-primary-foreground',
            'disabled:opacity-50 disabled:cursor-not-allowed'
          )}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default ReviewsCarousel;