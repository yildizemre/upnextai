import { CheckCircle, Users, CreditCard } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Pricing() {
  const navigate = useNavigate();

  return (
    <section id="pricing" className="py-20 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Fiyat & <span className="text-[#5B8CFF]">Kontenjan</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#5B8CFF] to-[#A7C8FF] mx-auto rounded-full"></div>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="bg-gradient-to-br from-[#5B8CFF]/20 to-[#A7C8FF]/10 border-2 border-[#5B8CFF] rounded-3xl p-8 md:p-12 shadow-2xl shadow-[#5B8CFF]/40 transform hover:scale-105 transition-all duration-300">
            <div className="text-center mb-8">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#5B8CFF]/30 to-[#A7C8FF]/20 px-5 py-2 rounded-full mb-6 animate-pulse">
                <Users className="text-[#5B8CFF]" size={20} />
                <span className="text-gray-900 font-bold">⚡ Kontenjan Sınırlı - Hemen Kaydol!</span>
              </div>

              <div className="mb-6">
                <div className="text-6xl md:text-7xl font-bold text-gray-900 mb-2">
                  3.500<span className="text-[#5B8CFF]">₺</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-gray-600">
                  <CreditCard size={20} />
                  <span className="text-lg">6 Taksit İmkanı</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#5B8CFF]/20 to-[#A7C8FF]/10 border border-[#5B8CFF]/50 rounded-xl p-5 mb-8">
                <p className="text-gray-900 font-bold text-xl mb-2">
                  Sadece <span className="text-[#5B8CFF] text-2xl">40 Kişilik</span> Kontenjan!
                </p>
                <p className="text-gray-600 text-sm">Yerler dolmadan hemen kaydol ve geleceğine yatırım yap</p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-[#5B8CFF] flex-shrink-0" size={24} />
                <span className="text-gray-800">2 gün yoğun bootcamp programı</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-[#5B8CFF] flex-shrink-0" size={24} />
                <span className="text-gray-800">8 saat interaktif eğitim</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-[#5B8CFF] flex-shrink-0" size={24} />
                <span className="text-gray-800">Mini AI projesi geliştirme</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-[#5B8CFF] flex-shrink-0" size={24} />
                <span className="text-gray-800">CV & LinkedIn workshop</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-[#5B8CFF] flex-shrink-0" size={24} />
                <span className="text-gray-800">Dijital sertifika</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-[#5B8CFF] flex-shrink-0" size={24} />
                <span className="text-gray-800">Eğitim kayıtlarına erişim</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-[#5B8CFF] flex-shrink-0" size={24} />
                <span className="text-gray-800">Staj yönlendirmesi ve iş fırsatlarına erişim</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-[#5B8CFF] flex-shrink-0" size={24} />
                <span className="text-gray-800">Özel sosyal medya grubu ve sürekli destek</span>
              </div>
            </div>

            <button
              onClick={() => navigate('/kayit')}
              className="w-full bg-[#5B8CFF] text-gray-900 py-4 rounded-full font-bold text-lg hover:bg-[#4A7BE8] transition shadow-xl shadow-[#5B8CFF]/50 hover:shadow-[#5B8CFF]/70 transform hover:scale-105"
            >
              Kayıt Ol
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
