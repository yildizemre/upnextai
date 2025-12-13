import { Handshake } from 'lucide-react';

export default function Partners() {
  const partners = [
    { name: 'JCI', role: 'Destekçi Kuruluş' },
    { name: 'AHK', role: 'Destekçi Kuruluş' }
  ];

  return (
    <section className="py-20 bg-[#f8f9fa] border-t border-[#5B8CFF]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 mb-4">
            <Handshake className="text-[#5B8CFF]" size={24} />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Destekçi <span className="text-[#5B8CFF]">Kuruluşlar</span>
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-[#5B8CFF] to-[#A7C8FF] mx-auto rounded-full"></div>
          <p className="text-gray-600 text-base md:text-lg mt-4">
            Kurumsal dernekler ve oluşumlar bizi destekliyor
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-12">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#5B8CFF]/10 to-transparent border border-[#5B8CFF]/30 rounded-2xl p-6 md:p-8 hover:border-[#5B8CFF]/60 hover:shadow-xl hover:shadow-[#5B8CFF]/20 transition-all duration-300 w-40 sm:w-48 md:min-w-[200px] text-center group"
            >
              <div className="bg-white/5 w-20 h-20 md:w-24 md:h-24 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/10 transition">
                <span className="text-[#5B8CFF] text-2xl md:text-3xl font-bold">{partner.name}</span>
              </div>
              <p className="text-gray-600 text-sm">{partner.role}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 text-sm">
            JCI, AHK ve benzeri prestijli kurumsal dernekler UpNext AI'ı desteklemektedir
          </p>
        </div>
      </div>
    </section>
  );
}
