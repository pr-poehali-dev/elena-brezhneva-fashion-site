
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F9F9F9]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1288" 
            alt="Елена Брежнева дизайнер одежды"
            className="object-cover w-full h-full opacity-90"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-cormorant text-5xl md:text-7xl font-light text-white mb-6 animate-fade-in">
            ЕЛЕНА БРЕЖНЕВА
          </h1>
          <p className="font-montserrat text-xl md:text-2xl text-white/90 mb-8 font-light tracking-wide">
            ДИЗАЙНЕР ОДЕЖДЫ
          </p>
          <Button asChild className="bg-white hover:bg-white/90 text-black font-montserrat tracking-wide rounded-none px-8 py-6">
            <Link to="/collections">СМОТРЕТЬ КОЛЛЕКЦИИ</Link>
          </Button>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="font-cormorant text-3xl md:text-4xl text-center mb-16 text-[#333333]">
          НОВАЯ КОЛЛЕКЦИЯ
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1288",
            "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1288",
            "https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1288"
          ].map((img, index) => (
            <div key={index} className="overflow-hidden group">
              <div className="overflow-hidden">
                <img 
                  src={img} 
                  alt={`Модель ${index + 1}`}
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-montserrat text-lg text-[#333333]">Модель {index + 1}</h3>
                <p className="font-montserrat text-sm text-[#666666]">Весна-Лето 2025</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button asChild variant="outline" className="border-[#333333] text-[#333333] font-montserrat tracking-wide rounded-none px-8 py-6">
            <Link to="/collections">ВСЕ КОЛЛЕКЦИИ</Link>
          </Button>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-[#0D0D0D] text-white">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="md:flex items-center gap-12">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=928"
                alt="Елена Брежнева"
                className="w-full h-[600px] object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="font-cormorant text-3xl md:text-4xl mb-6 text-[#D4AF37]">О ДИЗАЙНЕРЕ</h2>
              <p className="font-montserrat text-lg mb-6 text-white/80 leading-relaxed">
                Елена Брежнева — дизайнер одежды с уникальным видением, чьи работы отличаются элегантностью и вниманием к деталям. Её коллекции сочетают в себе современный дизайн и классические силуэты.
              </p>
              <p className="font-montserrat text-lg mb-8 text-white/80 leading-relaxed">
                Более 10 лет в индустрии моды, участие в международных показах и признание критиков сделали Елену одним из наиболее влиятельных дизайнеров своего поколения.
              </p>
              <Button asChild className="bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-black font-montserrat tracking-wide rounded-none px-8 py-6">
                <Link to="/about">УЗНАТЬ БОЛЬШЕ</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto text-center">
        <h2 className="font-cormorant text-3xl md:text-4xl mb-6 text-[#333333]">СВЯЗАТЬСЯ</h2>
        <p className="font-montserrat text-lg mb-8 text-[#666666] max-w-2xl mx-auto">
          Для заказов, сотрудничества или консультации, пожалуйста, свяжитесь с нами. Мы ответим вам в ближайшее время.
        </p>
        <Button asChild variant="outline" className="border-[#333333] text-[#333333] font-montserrat tracking-wide rounded-none px-8 py-6">
          <Link to="/contact">КОНТАКТЫ</Link>
        </Button>
      </section>
    </div>
  );
};

export default Index;
