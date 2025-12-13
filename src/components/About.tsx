import { Brain, Zap, Target } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            UpNext AI <span className="text-[#5B8CFF]">Nedir?</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#5B8CFF] to-[#A7C8FF] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-[#5B8CFF]/10 to-transparent border border-[#5B8CFF]/30 rounded-2xl p-8 hover:border-[#5B8CFF]/50 transition group">
            <div className="bg-[#5B8CFF]/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
              <Brain className="text-[#5B8CFF]" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Modern Eğitim Anlayışı</h3>
            <p className="text-gray-600">
              Sektörün en güncel AI teknolojilerini öğrenerek, gerçek dünya projelerinde hemen uygulayabileceğiniz pratik beceriler kazanın.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#5B8CFF]/10 to-transparent border border-[#5B8CFF]/30 rounded-2xl p-8 hover:border-[#5B8CFF]/50 transition group">
            <div className="bg-[#5B8CFF]/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
              <Zap className="text-[#5B8CFF]" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Hızlı ve Etkin Öğrenme</h3>
            <p className="text-gray-600">
              Yoğunlaştırılmış 2 günlük programda, temel AI bilgilerinden profesyonel iş dünyasına hazır projelere kadar her şeyi öğrenin.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#5B8CFF]/10 to-transparent border border-[#5B8CFF]/30 rounded-2xl p-8 hover:border-[#5B8CFF]/50 transition group">
            <div className="bg-[#5B8CFF]/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
              <Target className="text-[#5B8CFF]" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Kariyer Odaklı Yaklaşım</h3>
            <p className="text-gray-600">
              Sadece teknik bilgi değil; CV hazırlama, iş görüşmeleri, networking ve staj fırsatları ile kariyer gelişiminize kapsamlı destek.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#5B8CFF]/5 to-[#A7C8FF]/5 border border-[#5B8CFF]/20 rounded-2xl p-8 md:p-12">
          <p className="text-gray-800 text-lg md:text-xl leading-relaxed">
            <span className="text-[#5B8CFF] font-semibold">UpNext AI</span>, geleceğin teknolojilerini bugünden öğretmeyi hedefleyen,
            yenilikçi ve dinamik bir eğitim platformudur. Teorik bilgiyi pratiğe dönüştürerek, yapay zeka dünyasında hızla ilerlemek
            isteyen öğrencilere sadece teknik beceri değil, aynı zamanda sektörel bağlantılar, staj fırsatları ve
            profesyonel gelişim desteği sunuyoruz. <span className="text-[#5B8CFF] font-semibold">Öğrenmeyi bitirdiğiniz yerde başlatıyoruz!</span>
            <br /><br />
            Eğitim sonrasında katılımcılarımızı sektör lideri firmalarla buluşturuyor, staj ekosistemi oluşturarak
            kariyer yolculuklarında yanlarında oluyoruz. Sosyal medya gruplarımız üzerinden güncel haberler,
            iş ve staj fırsatları paylaşıyor, mezunlarımızla sürekli iletişim halinde kalıyoruz.
          </p>
        </div>
      </div>
    </section>
  );
}
