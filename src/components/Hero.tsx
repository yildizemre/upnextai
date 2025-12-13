import { ArrowDown, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-[#f8f9fa] via-[#e9ecef] to-[#f8f9fa] pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left space-y-6 md:space-y-8">
            <div className="inline-flex items-center space-x-2 bg-[#5B8CFF]/10 border border-[#5B8CFF]/30 rounded-full px-4 py-2">
              <Sparkles className="text-[#5B8CFF]" size={20} />
              <span className="text-gray-600 text-sm font-medium">Yeni Nesil AI Eğitimi</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              UpNext AI
              <br />
              <span className="text-[#5B8CFF]">Bootcamp</span>
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 font-light">
              "Your Next Level Starts Here."
            </p>

            <div className="flex flex-wrap gap-3 md:gap-4 text-gray-800 justify-center md:justify-start">
              <div className="flex items-center space-x-2 bg-[#5B8CFF]/10 px-3 py-2 md:px-4 rounded-lg">
                <span className="font-semibold text-sm md:text-base">2 Gün</span>
              </div>
              <div className="flex items-center space-x-2 bg-[#5B8CFF]/10 px-3 py-2 md:px-4 rounded-lg">
                <span className="font-semibold text-sm md:text-base">8 Saat</span>
              </div>
              <div className="flex items-center space-x-2 bg-[#5B8CFF]/10 px-3 py-2 md:px-4 rounded-lg">
                <span className="font-semibold text-sm md:text-base">Online</span>
              </div>
              <div className="flex items-center space-x-2 bg-[#5B8CFF]/10 px-3 py-2 md:px-4 rounded-lg">
                <span className="font-semibold text-sm md:text-base">Sertifikalı</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 md:gap-4 pt-4 justify-center md:justify-start">
              <button
                onClick={() => navigate('/kayit')}
                className="bg-[#5B8CFF] text-gray-900 px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold hover:bg-[#4A7BE8] transition shadow-2xl shadow-[#5B8CFF]/50 hover:shadow-[#5B8CFF]/70 transform hover:scale-105 text-sm md:text-base"
              >
                Kayıt Ol
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="bg-white/10 backdrop-blur-sm text-gray-900 border border-[#5B8CFF]/30 px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold hover:bg-white/20 transition text-sm md:text-base"
              >
                Detayları Gör
              </button>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center">
              <div className="absolute inset-0 bg-[#5B8CFF]/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-[#5B8CFF] to-[#A7C8FF] rounded-full opacity-20 animate-spin-slow"></div>
                <div className="absolute inset-8 bg-gradient-to-tr from-[#5B8CFF] to-[#A7C8FF] rounded-full opacity-30 animate-spin-slower"></div>
                <div className="absolute inset-16 bg-gradient-to-bl from-[#5B8CFF] to-[#A7C8FF] rounded-full opacity-40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Sparkles className="text-[#5B8CFF] w-24 h-24 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <button
            onClick={() => scrollToSection('about')}
            className="text-gray-600 hover:text-gray-900 transition animate-bounce"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
}
