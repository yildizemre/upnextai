import { Cpu, Users, TrendingUp, FileText, Award, Network } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: Cpu,
      title: 'Uygulamalı Mini AI Projesi',
      description: 'Google Colab üzerinde sıfırdan AI projesi geliştirerek öğrendiklerinizi anında pratiğe dökün ve portfolyonuza profesyonel bir proje ekleyin.'
    },
    {
      icon: Users,
      title: 'Proje Yönetimi & Agile Metodolojisi',
      description: 'İş dünyasında en çok kullanılan Agile ve Scrum yöntemlerini öğrenerek, ekip çalışmasında liderlik yapabilecek beceriler kazanın.'
    },
    {
      icon: TrendingUp,
      title: 'Profesyonel Sunum & Satış Becerileri',
      description: 'Müşteri karşısında nasıl etkili sunumlar yapacağınızı, projelerinizi nasıl fiyatlandırıp satacağınızı ve anlaşmaları nasıl sonuçlandıracağınızı öğrenin.'
    },
    {
      icon: FileText,
      title: 'Kariyer Danışmanlığı: CV & LinkedIn',
      description: 'Dikkat çeken bir CV nasıl hazırlanır? LinkedIn profilinizi nasıl optimize edersiniz? İş başvurularında öne çıkmanın tüm püf noktalarını öğrenin.'
    },
    {
      icon: Award,
      title: 'Onaylı Dijital Sertifika',
      description: 'Bootcamp sonunda alacağınız QR kodlu, doğrulanabilir UpNext AI sertifikasını LinkedIn profilinize ekleyerek profesyonel kimliğinizi güçlendirin.'
    },
    {
      icon: Network,
      title: 'Staj Ekosistemi & Networking',
      description: 'Eğitim sonrası firmalarla staj yönlendirmesi yapıyoruz. Sektör profesyonelleriyle tanışın, kariyer ağınızı genişletin ve iş fırsatlarına ilk elden ulaşın.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#e9ecef] to-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Neden Bu <span className="text-[#5B8CFF]">Bootcamp?</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#5B8CFF] to-[#A7C8FF] mx-auto rounded-full"></div>
          <p className="text-gray-600 text-lg mt-6 max-w-3xl mx-auto">
            Sadece AI öğrenmek değil; kariyer gelişimi, iş fırsatları ve sektörel bağlantılar için ihtiyacınız olan her şey bu programda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#5B8CFF]/10 to-transparent border border-[#5B8CFF]/30 rounded-2xl p-8 hover:border-[#5B8CFF]/60 hover:shadow-xl hover:shadow-[#5B8CFF]/20 transition-all duration-300 group"
            >
              <div className="bg-[#5B8CFF]/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#5B8CFF]/30 transition-all duration-300">
                <benefit.icon className="text-[#5B8CFF]" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
