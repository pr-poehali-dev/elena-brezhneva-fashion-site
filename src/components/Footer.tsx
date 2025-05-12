
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0D0D0D] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-cormorant text-xl mb-6">ЕЛЕНА БРЕЖНЕВА</h3>
            <p className="font-montserrat text-sm text-white/70 leading-relaxed">
              Дизайнер одежды, создающий уникальные коллекции, которые сочетают современность и классику.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat text-sm font-medium uppercase mb-6">Навигация</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="font-montserrat text-sm text-white/70 hover:text-white transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/about" className="font-montserrat text-sm text-white/70 hover:text-white transition-colors">
                  О дизайнере
                </Link>
              </li>
              <li>
                <Link to="/collections" className="font-montserrat text-sm text-white/70 hover:text-white transition-colors">
                  Коллекции
                </Link>
              </li>
              <li>
                <Link to="/contact" className="font-montserrat text-sm text-white/70 hover:text-white transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-montserrat text-sm font-medium uppercase mb-6">Контакты</h3>
            <ul className="space-y-3">
              <li className="font-montserrat text-sm text-white/70">
                <strong className="text-white">Email:</strong> info@elenabrezhneva.com
              </li>
              <li className="font-montserrat text-sm text-white/70">
                <strong className="text-white">Телефон:</strong> +7 (123) 456-78-90
              </li>
              <li className="font-montserrat text-sm text-white/70">
                <strong className="text-white">Адрес:</strong> Москва, ул. Тверская, 123
              </li>
            </ul>
          </div>
          
          {/* Social */}
          <div>
            <h3 className="font-montserrat text-sm font-medium uppercase mb-6">Социальные сети</h3>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="font-montserrat text-xs text-white/50 mb-4 md:mb-0">
            © {new Date().getFullYear()} Елена Брежнева. Все права защищены.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/privacy-policy" className="font-montserrat text-xs text-white/50 hover:text-white transition-colors">
              Политика конфиденциальности
            </Link>
            <Link to="/terms" className="font-montserrat text-xs text-white/50 hover:text-white transition-colors">
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
