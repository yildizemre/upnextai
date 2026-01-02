import { Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#f8f9fa] border-t border-[#5B8CFF]/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <span className="text-2xl font-bold text-gray-900">
              UpNext <span className="text-[#5B8CFF]">AI</span>
            </span>
            <p className="text-gray-600 text-sm mt-2">Your Next Level Starts Here.</p>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="https://www.linkedin.com/company/upnextai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#5B8CFF] transition"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/upnextai_tr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#5B8CFF] transition"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>

          <div className="text-gray-600 text-sm text-center">
            © 2025 UpNext AI. Tüm hakları saklıdır.
          </div>
        </div>
      </div>
    </footer>
  );
}
