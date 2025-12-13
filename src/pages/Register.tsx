import { useState, FormEvent } from 'react';
import { Send, CheckCircle, User, Mail, Phone, GraduationCap, BookOpen } from 'lucide-react';

export default function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    university: '',
    grade: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    setShowSuccess(true);

    setTimeout(() => {
      window.location.href = 'https://isyerim.param.com.tr/#/paymentform/paramtik/kl.param.com.tr/ma2Q';
    }, 2500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (showSuccess) {
    return (
      <section className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-[#e9ecef] to-[#f8f9fa]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#5B8CFF]/20 to-[#A7C8FF]/10 border-2 border-[#5B8CFF] rounded-3xl p-8 md:p-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-[#5B8CFF]/20 w-24 h-24 rounded-full flex items-center justify-center animate-pulse">
                <CheckCircle className="text-[#5B8CFF] w-16 h-16" />
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Kaydınız Alındı!</h3>
            <p className="text-gray-600 text-base md:text-lg">
              Şimdi ödeme sayfasına yönlendiriliyorsunuz...
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-[#e9ecef] to-[#f8f9fa]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Bootcamp <span className="text-[#5B8CFF]">Kayıt Formu</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#5B8CFF] to-[#A7C8FF] mx-auto rounded-full"></div>
          <p className="text-gray-600 text-base md:text-lg mt-4 md:mt-6">
            Sadece birkaç adımda kayıt olun ve geleceğinize ilk adımı atın
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#5B8CFF]/10 to-transparent border border-[#5B8CFF]/30 rounded-3xl p-6 md:p-8 lg:p-12">
          <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
            <div>
              <label htmlFor="fullName" className="flex items-center space-x-2 text-gray-800 font-semibold mb-2">
                <User size={18} className="text-[#5B8CFF]" />
                <span className="text-sm md:text-base">Ad Soyad *</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="w-full bg-[#f8f9fa]/50 border border-[#5B8CFF]/30 rounded-xl px-4 py-3 text-gray-900 placeholder-[#A7C8FF]/50 focus:outline-none focus:border-[#5B8CFF] transition text-sm md:text-base"
                placeholder="Adınız ve Soyadınız"
              />
            </div>

            <div>
              <label htmlFor="email" className="flex items-center space-x-2 text-gray-800 font-semibold mb-2">
                <Mail size={18} className="text-[#5B8CFF]" />
                <span className="text-sm md:text-base">E-posta</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-[#f8f9fa]/50 border border-[#5B8CFF]/30 rounded-xl px-4 py-3 text-gray-900 placeholder-[#A7C8FF]/50 focus:outline-none focus:border-[#5B8CFF] transition text-sm md:text-base"
                placeholder="ornek@email.com (opsiyonel)"
              />
            </div>

            <div>
              <label htmlFor="phone" className="flex items-center space-x-2 text-gray-800 font-semibold mb-2">
                <Phone size={18} className="text-[#5B8CFF]" />
                <span className="text-sm md:text-base">Telefon *</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-[#f8f9fa]/50 border border-[#5B8CFF]/30 rounded-xl px-4 py-3 text-gray-900 placeholder-[#A7C8FF]/50 focus:outline-none focus:border-[#5B8CFF] transition text-sm md:text-base"
                placeholder="05XX XXX XX XX"
              />
            </div>

            <div>
              <label htmlFor="university" className="flex items-center space-x-2 text-gray-800 font-semibold mb-2">
                <GraduationCap size={18} className="text-[#5B8CFF]" />
                <span className="text-sm md:text-base">Üniversite / Bölüm *</span>
              </label>
              <input
                type="text"
                id="university"
                name="university"
                required
                value={formData.university}
                onChange={handleChange}
                className="w-full bg-[#f8f9fa]/50 border border-[#5B8CFF]/30 rounded-xl px-4 py-3 text-gray-900 placeholder-[#A7C8FF]/50 focus:outline-none focus:border-[#5B8CFF] transition text-sm md:text-base"
                placeholder="Üniversite Adı - Bölüm"
              />
            </div>

            <div>
              <label htmlFor="grade" className="flex items-center space-x-2 text-gray-800 font-semibold mb-2">
                <BookOpen size={18} className="text-[#5B8CFF]" />
                <span className="text-sm md:text-base">Sınıf *</span>
              </label>
              <input
                type="text"
                id="grade"
                name="grade"
                required
                value={formData.grade}
                onChange={handleChange}
                className="w-full bg-[#f8f9fa]/50 border border-[#5B8CFF]/30 rounded-xl px-4 py-3 text-gray-900 placeholder-[#A7C8FF]/50 focus:outline-none focus:border-[#5B8CFF] transition text-sm md:text-base"
                placeholder="Örn: 2. Sınıf, Mezun, vb."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#5B8CFF] text-gray-900 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-[#4A7BE8] transition shadow-xl shadow-[#5B8CFF]/50 hover:shadow-[#5B8CFF]/70 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <span>Gönderiliyor...</span>
              ) : (
                <>
                  <span>Kayıt Formunu Gönder</span>
                  <Send size={18} />
                </>
              )}
            </button>

            <p className="text-gray-600 text-xs md:text-sm text-center">
              Form gönderildikten sonra ödeme sayfasına yönlendirileceksiniz
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
