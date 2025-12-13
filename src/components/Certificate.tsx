import { Award, CheckCircle, QrCode, Linkedin } from 'lucide-react';

export default function Certificate() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#e9ecef] to-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-gradient-to-br from-[#5B8CFF]/20 to-[#A7C8FF]/20 border-2 border-[#5B8CFF]/40 rounded-2xl p-8 shadow-2xl shadow-[#5B8CFF]/30 transform hover:scale-105 transition-all duration-300">
              <div className="text-center space-y-6">
                <div className="flex justify-center">
                  <Award className="text-[#5B8CFF] w-24 h-24" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  UpNext AI
                  <br />
                  <span className="text-gray-600">Certification</span>
                </h3>
                <div className="h-px bg-gradient-to-r from-transparent via-[#5B8CFF] to-transparent"></div>
                <p className="text-gray-800 text-lg">
                  Bu sertifika, UpNext AI Bootcamp programını
                  <br />
                  başarıyla tamamladığınızı belgeler.
                </p>
                <div className="flex justify-center pt-4">
                  <div className="bg-white/10 p-4 rounded-xl">
                    <QrCode className="text-gray-600 w-16 h-16" />
                  </div>
                </div>
                <p className="text-gray-600 text-sm">QR Kod ile Doğrulanabilir</p>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Dijital <span className="text-[#5B8CFF]">Sertifika</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#5B8CFF] to-[#A7C8FF] rounded-full"></div>

            <p className="text-gray-800 text-lg leading-relaxed">
              Eğitimi tamamlayan tüm katılımcılarımıza <span className="text-[#5B8CFF] font-semibold">UpNext AI Certification</span> verilir.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-[#5B8CFF] mt-1 flex-shrink-0" size={24} />
                <div>
                  <p className="text-gray-900 font-semibold">QR Kodlu Doğrulama</p>
                  <p className="text-gray-600">Sertifikanızın gerçekliği QR kod ile anında doğrulanabilir</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Linkedin className="text-[#5B8CFF] mt-1 flex-shrink-0" size={24} />
                <div>
                  <p className="text-gray-900 font-semibold">LinkedIn Uyumlu</p>
                  <p className="text-gray-600">LinkedIn profilinize kolayca ekleyebilir ve paylaşabilirsiniz</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Award className="text-[#5B8CFF] mt-1 flex-shrink-0" size={24} />
                <div>
                  <p className="text-gray-900 font-semibold">Profesyonel Tasarım</p>
                  <p className="text-gray-600">Modern ve profesyonel dijital sertifika tasarımı</p>
                </div>
              </div>
            </div>

            <div className="bg-[#5B8CFF]/10 border border-[#5B8CFF]/30 rounded-xl p-6 mt-8">
              <p className="text-gray-800">
                Sertifikanız e-posta ile gönderilir ve online olarak görüntülenebilir,
                paylaşılabilir ve doğrulanabilir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
