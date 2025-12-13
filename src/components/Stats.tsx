import { TrendingUp, Users, Briefcase, Award } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      icon: Users,
      value: '500+',
      label: 'Mutlu Katılımcı',
      color: 'from-[#5B8CFF] to-[#A7C8FF]'
    },
    {
      icon: Briefcase,
      value: '%85',
      label: 'Staj Yerleştirme Oranı',
      color: 'from-[#A7C8FF] to-[#5B8CFF]'
    },
    {
      icon: Award,
      value: '50+',
      label: 'İşbirliği Yapılan Firma',
      color: 'from-[#5B8CFF] to-[#A7C8FF]'
    },
    {
      icon: TrendingUp,
      value: '%95',
      label: 'Memnuniyet Oranı',
      color: 'from-[#A7C8FF] to-[#5B8CFF]'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#e9ecef] to-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Rakamlarla <span className="text-[#5B8CFF]">UpNext AI</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#5B8CFF] to-[#A7C8FF] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#5B8CFF]/10 to-transparent border border-[#5B8CFF]/30 rounded-2xl p-6 md:p-8 hover:border-[#5B8CFF]/60 hover:shadow-xl hover:shadow-[#5B8CFF]/20 transition-all duration-300 text-center group"
            >
              <div className={`bg-gradient-to-br ${stat.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition`}>
                <stat.icon className="text-gray-900" size={32} />
              </div>
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <p className="text-gray-600 text-base md:text-lg">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-[#5B8CFF]/10 to-[#A7C8FF]/5 border border-[#5B8CFF]/30 rounded-2xl p-6 md:p-8 text-center">
          <p className="text-gray-800 text-base md:text-lg">
            Eğitim sonrası <span className="text-[#5B8CFF] font-semibold">katılımcılarımızın %85'ini</span> sektör lideri firmalarla
            buluşturuyor, <span className="text-[#5B8CFF] font-semibold">staj ve iş imkanları</span> sağlıyoruz!
          </p>
        </div>
      </div>
    </section>
  );
}
