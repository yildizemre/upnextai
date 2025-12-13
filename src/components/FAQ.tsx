import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Eğitim online mı?',
      answer: 'Evet, eğitim tamamen online olarak gerçekleştirilir. Tüm katılımcılar canlı oturumlara katılabilir ve etkileşimli bir öğrenme deneyimi yaşar. Ayrıca, tüm oturumların kayıtlarına erişim sağlanır, böylece istediğiniz zaman tekrar izleyebilirsiniz.'
    },
    {
      question: 'Tekrar izlenebilir mi?',
      answer: 'Kesinlikle! Tüm eğitim kayıtları katılımcılarla paylaşılır. Canlı oturumlara katılamadığınız veya tekrar etmek istediğiniz konular için kayıtlara sınırsız erişiminiz olacak. Bu sayede kendi hızınızda öğrenmeye devam edebilirsiniz.'
    },
    {
      question: 'Sertifika geçerli mi?',
      answer: 'Evet, UpNext AI Certification dijital, QR kodlu ve doğrulanabilir bir sertifikadır. LinkedIn profilinize ekleyebilir, CV\'nizde kullanabilir ve işverenlere sunabilirsiniz. Sertifikanın gerçekliği QR kod taraması ile anında doğrulanabilir, bu da güvenilirliğini artırır.'
    },
    {
      question: 'Ön bilgi gerekiyor mu?',
      answer: 'Hayır, herhangi bir ön bilgi gerekmemektedir. Bootcamp programımız, AI ve proje yönetimi konularında hiç deneyimi olmayan kişiler için temel seviyeden başlayacak şekilde tasarlanmıştır. Sadece öğrenme isteği ve motivasyon yeterlidir!'
    },
    {
      question: 'Yaş sınırı var mı?',
      answer: 'Bootcamp\'imiz öncelikli olarak üniversite öğrencileri ve yeni mezunlar için tasarlanmış olsa da, herhangi bir yaş sınırı bulunmamaktadır. AI ve kariyer gelişimi konularında kendini geliştirmek isteyen herkes başvurabilir. 18 yaş üstü tüm katılımcıları memnuniyetle karşılıyoruz.'
    },
    {
      question: 'Ödeme taksitli mi?',
      answer: 'Evet, ödemenizi 6 taksit imkanı ile gerçekleştirebilirsiniz. Taksit seçenekleri ödeme sayfasında detaylı olarak gösterilecektir. Kredi kartı ile güvenli ödeme altyapımız sayesinde kolayca kayıt olabilirsiniz.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-[#f8f9fa]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sıkça Sorulan <span className="text-[#5B8CFF]">Sorular</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#5B8CFF] to-[#A7C8FF] mx-auto rounded-full"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#5B8CFF]/10 to-transparent border border-[#5B8CFF]/30 rounded-2xl overflow-hidden hover:border-[#5B8CFF]/50 transition"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="text-gray-900 font-semibold text-lg pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-[#5B8CFF] flex-shrink-0" size={24} />
                ) : (
                  <ChevronDown className="text-[#5B8CFF] flex-shrink-0" size={24} />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
