'use client';
import Image from 'next/image';

const TechIcon = ({ children, className = "" }) => {
    return (
      <div className={`absolute p-3 bg-black/50 border-2 border-white rounded-lg transform hover:scale-110 transition-transform cursor-pointer backdrop-blur-sm ${className}`}>
        <div className="w-6 h-6 text-white">
          {children}
        </div>
      </div>
    );
  };

  // Custom SVG Icons Components tetap sama
const LaravelIcon = () => (
    <svg viewBox="0 0 50 50" fill="currentColor">
      <path d="M49.626 11.564a.809.809 0 0 1 .028.209v10.972a.8.8 0 0 1-.402.694l-9.209 5.302V39.25c0 .286-.152.55-.4.694L20.42 51.01c-.044.025-.092.041-.14.058-.018.006-.035.017-.054.022a.805.805 0 0 1-.41 0c-.022-.006-.042-.018-.063-.026-.044-.016-.09-.03-.132-.054L.402 39.944A.801.801 0 0 1 0 39.25V6.334c0-.072.01-.142.028-.21.006-.023.02-.044.028-.067.015-.042.029-.085.051-.124.015-.026.037-.047.055-.071.023-.032.044-.065.071-.093.023-.023.053-.04.079-.06.029-.024.055-.05.088-.069h.001l9.61-5.533a.802.802 0 0 1 .8 0l9.61 5.533h.002c.032.02.059.045.088.068.026.02.055.038.078.06.028.029.048.062.072.094.017.024.04.045.054.071.023.04.036.082.052.124.008.023.022.044.028.068a.809.809 0 0 1 .028.209v20.559l8.008-4.611v-10.51c0-.07.01-.141.028-.208.007-.024.02-.045.028-.068.016-.042.03-.085.052-.124.015-.026.037-.047.054-.071.024-.032.044-.065.072-.093.023-.023.052-.04.078-.06.03-.024.056-.05.088-.069h.001l9.61-5.533a.801.801 0 0 1 .8 0l9.61 5.533c.034.02.06.045.09.068.025.02.054.038.077.06.028.029.048.062.072.094.018.024.04.045.054.071.023.039.036.082.052.124.009.023.022.044.028.068zm-1.574 10.718v-9.124l-3.363 1.936-4.646 2.675v9.124l8.01-4.611zm-9.61 16.505v-9.13l-4.57 2.61-13.05 7.448v9.216l17.62-10.144zM1.602 7.719v31.068L19.22 48.93v-9.214l-9.204-5.209-.003-.002-.004-.002c-.031-.018-.057-.044-.086-.066-.025-.02-.054-.036-.076-.058l-.002-.003c-.026-.025-.044-.056-.066-.084-.02-.027-.044-.05-.06-.078l-.001-.003c-.018-.03-.029-.066-.042-.1-.013-.03-.03-.058-.038-.09v-.001c-.01-.038-.012-.078-.016-.117-.004-.03-.012-.06-.012-.09v-21.483L4.965 9.654 1.602 7.72zm8.81-5.994L2.405 6.334l8.005 4.609 8.006-4.61-8.006-4.608zm4.164 28.764l4.645-2.674V7.719l-3.363 1.936-4.646 2.675v20.096l3.364-1.937zM39.243 7.164l-8.006 4.609 8.006 4.609 8.005-4.61-8.005-4.608zm-.801 10.605l-4.646-2.675-3.363-1.936v9.124l4.645 2.674 3.364 1.937v-9.124zM20.02 38.33l11.743-6.704 5.87-3.35-8-4.606-9.211 5.303-8.395 4.833 7.993 4.524z" />
    </svg>
  );
  
  const FlutterIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z"/>
    </svg>
  );
  
  const HTMLIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
    </svg>
  );
  
  const CSSIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
    </svg>
  );
  
  const TailwindIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
    </svg>
  );
  
  const BootstrapIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 11.39v1.218c-1.128.108-1.817.944-2.226 2.268-.407 1.319-.463 2.937-.42 4.186.045 1.3-.968 2.5-2.337 2.5H4.985c-1.37 0-2.383-1.2-2.337-2.5.043-1.249-.013-2.867-.42-4.186-.41-1.324-1.1-2.16-2.228-2.268V11.39c1.128-.108 1.819-.944 2.227-2.268.408-1.319.464-2.937.42-4.186-.045-1.3.968-2.5 2.338-2.5h14.032c1.37 0 2.382 1.2 2.337 2.5-.043 1.249.013 2.867.42 4.186.409 1.324 1.098 2.16 2.226 2.268zm-7.927 2.817c0-1.354-.953-2.333-2.368-2.488v-.057c1.04-.169 1.856-1.135 1.856-2.213 0-1.537-1.213-2.538-3.062-2.538h-4.16v10.172h4.181c2.218 0 3.553-1.086 3.553-2.876z"/>
    </svg>
  );

const HeroSection = () => {
  return (
    <section className="bg-black min-h-screen relative overflow-hidden flex items-center">
      {/* Decorative Blob */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 transform">
        <svg 
          width="800" 
          height="800" 
          viewBox="0 0 800 800" 
          className="opacity-10 animate-blob"
        >
          <path
            d="M400,30C521.8,30,620.8,129,620.8,250.8C620.8,372.6,521.8,471.6,400,471.6C278.2,471.6,179.2,372.6,179.2,250.8C179.2,129,278.2,30,400,30Z"
            fill="#293936"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image with floating icons */}
          <div className="relative z-10 animate-fadeIn">
            <div className="relative w-full h-[400px] md:h-[500px]">
              <Image
                src="/coding.png"
                alt="Coding Illustration"
                fill
                className="object-contain"
                priority
              />
              
              {/* Floating Tech Icons */}
              <TechIcon className="top-0 left-1/4 animate-float animation-delay-200">
                <LaravelIcon />
              </TechIcon>
              <TechIcon className="bottom-1/4 -left-4 animate-float animation-delay-600">
                <FlutterIcon />
              </TechIcon>
              <TechIcon className="top-1/4 -left-8 animate-float animation-delay-400">
                <HTMLIcon />
              </TechIcon>
              <TechIcon className="top-0 right-1/4 animate-float animation-delay-1000">
                <CSSIcon />
              </TechIcon>
              <TechIcon className="top-1/4 -right-8 animate-float animation-delay-300">
                <TailwindIcon />
              </TechIcon>
              <TechIcon className="bottom-1/4 -right-4 animate-float animation-delay-500">
                <BootstrapIcon />
              </TechIcon>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="text-white z-10 animate-fadeIn animation-delay-200">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-slideUp animation-delay-400">
              Bangun Masa Depan <br/>
              <span className="text-[#293936]">Digital</span> Bersama FORTI
            </h1>
            
            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-lg animate-slideUp animation-delay-600">
              Forum Riset Teknologi Informasi - Tempat di mana inovasi bertemu passion, 
              mengembangkan skill programming, riset, dan berkompetisi dalam dunia IT.
            </p>

            <div className="flex gap-4 animate-slideUp animation-delay-800">
              <button className="bg-[#293936] text-white px-8 py-3 rounded-full hover:bg-[#293936]/90 transition-colors">
                Bergabung Sekarang
              </button>
              <button className="border-2 border-[#293936] text-[#293936] px-8 py-3 rounded-full hover:bg-[#293936] hover:text-white transition-colors">
                Pelajari Lebih Lanjut
              </button>
            </div>

            {/* Additional Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 animate-slideUp animation-delay-1000">
              <div>
                <h3 className="text-3xl font-bold text-[#293936]">50+</h3>
                <p className="text-gray-400">Anggota Aktif</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-[#293936]">20+</h3>
                <p className="text-gray-400">Project Selesai</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-[#293936]">15+</h3>
                <p className="text-gray-400">Prestasi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;