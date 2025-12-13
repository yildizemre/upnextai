import { Calendar, Clock, CheckCircle } from 'lucide-react';

export default function Program() {
  const day1 = [
    'Machine Learning & Deep Learning temel kavramları ve gerçek dünya uygulamaları',
    'Yapay zekanın iş dünyasındaki kullanım alanları ve sektörel örnekler',
    'Google Colab ile uygulamalı mini AI projesi geliştirme',
    'Profesyonel CV hazırlama ve optimize etme atölyesi'
  ];

  const day2 = [
    'Agile ve Scrum ile modern proje yönetimi teknikleri',
    'Proje fiyatlandırma, bütçeleme ve maliyet yönetimi',
    'Müşteri karşısında etkili sunum yapma ve iletişim becerileri',
    'Satış görüşmeleri ve anlaşma sonuçlandırma stratejileri',
    'Kişisel marka oluşturma, LinkedIn optimizasyonu ve profesyonel networking'
  ];

  return (
    <section id="program" className="py-20 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Program <span className="text-[#5B8CFF]">Detayları</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#5B8CFF] to-[#A7C8FF] mx-auto rounded-full"></div>
          <p className="text-gray-600 text-lg mt-6">
            2 gün, 8 saat yoğun ve interaktif eğitim programı
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-[#5B8CFF]/10 to-transparent border border-[#5B8CFF]/30 rounded-2xl p-8 hover:border-[#5B8CFF]/50 transition">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-[#5B8CFF]/20 w-12 h-12 rounded-xl flex items-center justify-center">
                <Calendar className="text-[#5B8CFF]" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">1. Gün</h3>
                <p className="text-gray-600">Yapay Zeka Uygulamaları</p>
              </div>
            </div>

            <div className="flex items-center space-x-2 mb-6 text-gray-600">
              <Clock size={20} />
              <span>4 Saat</span>
            </div>

            <div className="space-y-4">
              {day1.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="text-[#5B8CFF] mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-800">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#5B8CFF]/10 to-transparent border border-[#5B8CFF]/30 rounded-2xl p-8 hover:border-[#5B8CFF]/50 transition">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-[#5B8CFF]/20 w-12 h-12 rounded-xl flex items-center justify-center">
                <Calendar className="text-[#5B8CFF]" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">2. Gün</h3>
                <p className="text-gray-600">Proje Yönetimi & Satış</p>
              </div>
            </div>

            <div className="flex items-center space-x-2 mb-6 text-gray-600">
              <Clock size={20} />
              <span>4 Saat</span>
            </div>

            <div className="space-y-4">
              {day2.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="text-[#5B8CFF] mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-800">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-[#5B8CFF]/5 to-[#A7C8FF]/5 border border-[#5B8CFF]/20 rounded-2xl p-8 text-center">
          <p className="text-gray-800 text-lg">
            <span className="text-[#5B8CFF] font-semibold">Tüm eğitim canlı ve interaktif</span> olarak online gerçekleştirilir.
            Katılımcılara <span className="text-[#5B8CFF] font-semibold">sınırsız kayıt erişimi</span> sağlanır ve
            eğitim sonrası özel sosyal medya gruplarında güncel haberler, staj ve iş fırsatları paylaşılır.
          </p>
        </div>
      </div>
    </section>
  );
}
