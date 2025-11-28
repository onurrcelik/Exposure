import Image from 'next/image';

const logos = [
  { src: '/carousel-logos/startupbotcamp.png', alt: 'Startup Bootcamp', size: 'normal' },
  { src: '/carousel-logos/3.svg.png', alt: 'Company Logo 3', size: 'small' },
  { src: '/carousel-logos/6.png', alt: 'Company Logo 6', size: 'small' },
  { src: '/carousel-logos/robert.jpg', alt: 'Robert College', size: 'large' },
  { src: '/carousel-logos/NYU.png', alt: 'NYU', size: 'normal' },
  { src: '/carousel-logos/uchicago.png', alt: 'University of Chicago', size: 'normal' },
  { src: '/carousel-logos/stanford.png', alt: 'Stanford University', size: 'normal' },
  { src: '/carousel-logos/TUM.png', alt: 'TUM', size: 'small' },
  { src: '/carousel-logos/11.png', alt: 'Company Logo 11', size: 'small' },
  { src: '/carousel-logos/15.png', alt: 'Company Logo 15', size: 'small' },
  { src: '/carousel-logos/17.png', alt: 'Company Logo 17', size: 'small' },
  { src: '/carousel-logos/berkeley.png', alt: 'UC Berkeley', size: 'small' },
  { src: '/carousel-logos/codeway.png', alt: 'Codeway', size: 'large' },
  { src: '/carousel-logos/8.png', alt: 'Company Logo 8', size: 'small' },
  { src: '/carousel-logos/aalto.png', alt: 'Aalto University', size: 'small' },
  { src: '/carousel-logos/toyota.png', alt: 'Toyota', size: 'small' },
  { src: '/carousel-logos/14.png', alt: 'Company Logo 14', size: 'small' },
];

export function LogoCarousel() {
  const getSizeClass = (size: string) => {
    switch (size) {
      case 'large':
        return { width: 200, height: 100, className: 'h-20 w-auto object-contain' };
      case 'small':
        return { width: 120, height: 60, className: 'h-12 w-auto object-contain' };
      default:
        return { width: 160, height: 80, className: 'h-16 w-auto object-contain' };
    }
  };

  return (
    <div className="w-full overflow-hidden py-8 bg-white">
      <div className="flex items-center gap-12 animate-scroll">
        {/* First set of logos */}
        {logos.map((logo, index) => {
          const sizeConfig = getSizeClass(logo.size);
          return (
            <div
              key={`logo-1-${index}`}
              className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={sizeConfig.width}
                height={sizeConfig.height}
                className={sizeConfig.className}
              />
            </div>
          );
        })}
        {/* Duplicate set for seamless loop */}
        {logos.map((logo, index) => {
          const sizeConfig = getSizeClass(logo.size);
          return (
            <div
              key={`logo-2-${index}`}
              className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={sizeConfig.width}
                height={sizeConfig.height}
                className={sizeConfig.className}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
