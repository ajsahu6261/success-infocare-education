
import React, { useEffect, useState } from 'react';
import Home1 from '../assets/home1.webp';
import { ChevronLeft, ChevronRight, Monitor, Code2, Laptop } from 'lucide-react';

const slides = [
  {
    title: 'Build Your Future with Computer Education',
    highlight: 'Learn. Practice. Grow.',
    description:
      'Gain practical computer skills and build a strong foundation for your career with Success Infocare Education.',
    image: Home1,
    icon: Monitor,
  },
  {
    title: 'Learn Web Development',
    highlight: 'Turn Your Ideas into Reality.',
    description:
      'Explore HTML, CSS, JavaScript and modern web technologies through practical learning.',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=85',
    icon: Code2,
  },
  {
    title: 'Upgrade Your Digital Skills',
    highlight: 'Skills for a Better Tomorrow.',
    description:
      'Improve your computer knowledge, develop professional skills and prepare for new opportunities.',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=85',
    icon: Laptop,
  },
];

const Home = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActive((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[active];
  const SlideIcon = slide.icon;

  return (
    <section className="relative flex min-h-[650px] h-[calc(100vh-80px)] max-h-[850px] w-full items-center overflow-hidden bg-[#0D1C42] text-white">

      {/* Background Image */}
      {slides.map((item, index) => (
        <img
          key={item.title}
          src={item.image}
          alt={item.title}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            active === index ? 'opacity-40' : 'opacity-0'
          }`}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0D1C42] via-[#0D1C42]/85 to-[#0D1C42]/30" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-16 md:px-12 lg:px-16">
        <div className="max-w-3xl">

          <p className="mb-3 text-lg font-semibold text-blue-300 md:text-xl">
            {slide.highlight}
          </p>

          <h1
            key={slide.title}
            className="animate-[fadeIn_0.7s_ease-out] text-4xl font-extrabold leading-tight md:text-6xl lg:text-7xl"
          >
            {slide.title}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-200 md:text-lg md:leading-8">
            {slide.description}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="/contactUs"
              className="rounded-lg bg-blue-500 px-7 py-3.5 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-blue-600"
            >
              Enquiry Now →
            </a>

            <a
              href="/courses"
              className="rounded-lg border border-white/70 px-7 py-3.5 font-bold text-white transition hover:bg-white hover:text-[#0D1C42]"
            >
              Explore Courses
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-200">
            <span>✓ Practical Learning</span>
            <span>✓ Career-Focused Skills</span>
            <span>✓ Computer Training</span>
          </div>
        </div>
      </div>

      {/* Previous / Next Buttons */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/30 bg-black/30 p-2 transition hover:bg-blue-600 md:left-6 md:p-3"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/30 bg-black/30 p-2 transition hover:bg-blue-600 md:right-6 md:p-3"
      >
        <ChevronRight size={28} />
      </button>

      {/* Slider Indicators */}
      <div className="absolute bottom-7 left-0 z-20 flex w-full justify-center gap-3">
        {slides.map((item, index) => (
          <button
            key={item.title}
            type="button"
            onClick={() => setActive(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={active === index ? 'true' : undefined}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              active === index
                ? 'w-10 bg-blue-400'
                : 'w-2.5 bg-white/60 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Home;
