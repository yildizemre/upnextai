import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  const goToRegister = () => {
    navigate('/kayit');
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-[#f8f9fa]/95 backdrop-blur-sm z-50 border-b border-[#5B8CFF]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button onClick={() => navigate('/')} className="flex items-center">
            <span className="text-xl md:text-2xl font-bold text-gray-900">
              UpNext <span className="text-[#5B8CFF]">AI</span>
            </span>
          </button>

          <div className="hidden md:flex space-x-6 lg:space-x-8">
            <button onClick={() => scrollToSection('hero')} className="text-gray-600 hover:text-gray-900 transition text-sm lg:text-base">
              Ana Sayfa
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-gray-900 transition text-sm lg:text-base">
              Hakkında
            </button>
            <button onClick={() => scrollToSection('program')} className="text-gray-600 hover:text-gray-900 transition text-sm lg:text-base">
              Program
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-600 hover:text-gray-900 transition text-sm lg:text-base">
              Fiyat
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-gray-600 hover:text-gray-900 transition text-sm lg:text-base">
              SSS
            </button>
            <button
              onClick={goToRegister}
              className="bg-[#5B8CFF] text-gray-900 px-5 lg:px-6 py-2 rounded-full hover:bg-[#4A7BE8] transition shadow-lg shadow-[#5B8CFF]/30 text-sm lg:text-base"
            >
              Kayıt Ol
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#f8f9fa] border-t border-[#5B8CFF]/20">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <button onClick={() => scrollToSection('hero')} className="block w-full text-left text-gray-600 hover:text-gray-900 py-2">
              Ana Sayfa
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-600 hover:text-gray-900 py-2">
              Hakkında
            </button>
            <button onClick={() => scrollToSection('program')} className="block w-full text-left text-gray-600 hover:text-gray-900 py-2">
              Program
            </button>
            <button onClick={() => scrollToSection('pricing')} className="block w-full text-left text-gray-600 hover:text-gray-900 py-2">
              Fiyat
            </button>
            <button onClick={() => scrollToSection('faq')} className="block w-full text-left text-gray-600 hover:text-gray-900 py-2">
              SSS
            </button>
            <button
              onClick={goToRegister}
              className="block w-full bg-[#5B8CFF] text-gray-900 px-6 py-2 rounded-full hover:bg-[#4A7BE8] transition"
            >
              Kayıt Ol
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
