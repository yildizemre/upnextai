import { Mail, Instagram, Linkedin, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#e9ecef] to-[#f8f9fa]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            İletişime <span className="text-[#5B8CFF]">Geç</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#5B8CFF] to-[#A7C8FF] mx-auto rounded-full"></div>
          <p className="text-gray-600 text-lg mt-6">
            Sorularınız için bize ulaşın
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <a
            href="https://wa.me/905XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-[#5B8CFF]/10 to-transparent border border-[#5B8CFF]/30 rounded-2xl p-8 hover:border-[#5B8CFF]/60 hover:shadow-xl hover:shadow-[#5B8CFF]/20 transition-all duration-300 group"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-[#5B8CFF]/20 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition">
                <MessageCircle className="text-[#5B8CFF]" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">WhatsApp</h3>
                <p className="text-gray-600">Hızlı destek için</p>
              </div>
            </div>
          </a>

          <a
            href="mailto:info@upnextai.com"
            className="bg-gradient-to-br from-[#5B8CFF]/10 to-transparent border border-[#5B8CFF]/30 rounded-2xl p-8 hover:border-[#5B8CFF]/60 hover:shadow-xl hover:shadow-[#5B8CFF]/20 transition-all duration-300 group"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-[#5B8CFF]/20 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition">
                <Mail className="text-[#5B8CFF]" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">E-posta</h3>
                <p className="text-gray-600">info@upnextai.com</p>
              </div>
            </div>
          </a>

          <a
            href="https://instagram.com/upnextai"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-[#5B8CFF]/10 to-transparent border border-[#5B8CFF]/30 rounded-2xl p-8 hover:border-[#5B8CFF]/60 hover:shadow-xl hover:shadow-[#5B8CFF]/20 transition-all duration-300 group"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-[#5B8CFF]/20 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition">
                <Instagram className="text-[#5B8CFF]" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Instagram</h3>
                <p className="text-gray-600">@upnextai</p>
              </div>
            </div>
          </a>

          <a
            href="https://linkedin.com/company/upnextai"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-[#5B8CFF]/10 to-transparent border border-[#5B8CFF]/30 rounded-2xl p-8 hover:border-[#5B8CFF]/60 hover:shadow-xl hover:shadow-[#5B8CFF]/20 transition-all duration-300 group"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-[#5B8CFF]/20 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition">
                <Linkedin className="text-[#5B8CFF]" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">LinkedIn</h3>
                <p className="text-gray-600">UpNext AI</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
