
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to a server
    console.log("Form submitted:", formData);
    
    toast({
      title: "Сообщение отправлено",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-[#F9F9F9] pt-24 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="font-cormorant text-4xl md:text-5xl text-center mb-6 text-[#333333]">
          СВЯЖИТЕСЬ С НАМИ
        </h1>
        <p className="font-montserrat text-center text-[#666666] max-w-2xl mx-auto mb-16">
          У вас возникли вопросы или предложения? Заполните форму ниже или воспользуйтесь другими способами связи.
        </p>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#0D0D0D] rounded-md">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-montserrat text-lg font-medium mb-1 text-[#333333]">
                      Электронная почта
                    </h3>
                    <p className="font-montserrat text-[#666666]">
                      info@elenabrezhneva.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#0D0D0D] rounded-md">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-montserrat text-lg font-medium mb-1 text-[#333333]">
                      Телефон
                    </h3>
                    <p className="font-montserrat text-[#666666]">
                      +7 (123) 456-78-90
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#0D0D0D] rounded-md">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-montserrat text-lg font-medium mb-1 text-[#333333]">
                      Адрес
                    </h3>
                    <p className="font-montserrat text-[#666666]">
                      Москва, ул. Тверская, 123
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="font-montserrat text-lg font-medium mb-4 text-[#333333]">
                  Социальные сети
                </h3>
                <div className="flex gap-4">
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-[#0D0D0D] rounded-md hover:bg-[#D4AF37] transition-colors"
                  >
                    <Instagram className="h-5 w-5 text-white" />
                  </a>
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-[#0D0D0D] rounded-md hover:bg-[#D4AF37] transition-colors"
                  >
                    <Facebook className="h-5 w-5 text-white" />
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-[#0D0D0D] rounded-md hover:bg-[#D4AF37] transition-colors"
                  >
                    <Twitter className="h-5 w-5 text-white" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="font-montserrat text-sm font-medium text-[#333333] block mb-2">
                      Имя
                    </label>
                    <Input 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="font-montserrat h-12 border-[#CCCCCC] focus-visible:ring-[#D4AF37]"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="font-montserrat text-sm font-medium text-[#333333] block mb-2">
                      Электронная почта
                    </label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="font-montserrat h-12 border-[#CCCCCC] focus-visible:ring-[#D4AF37]"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="font-montserrat text-sm font-medium text-[#333333] block mb-2">
                    Тема
                  </label>
                  <Input 
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="font-montserrat h-12 border-[#CCCCCC] focus-visible:ring-[#D4AF37]"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="font-montserrat text-sm font-medium text-[#333333] block mb-2">
                    Сообщение
                  </label>
                  <Textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="font-montserrat resize-none border-[#CCCCCC] focus-visible:ring-[#D4AF37]"
                  />
                </div>
                
                <div>
                  <Button 
                    type="submit"
                    className="bg-[#0D0D0D] hover:bg-[#D4AF37] text-white font-montserrat tracking-wide rounded-none px-8 py-6 h-auto"
                  >
                    ОТПРАВИТЬ
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        {/* Map */}
        <div className="mt-20">
          <div className="aspect-w-16 aspect-h-9 max-h-[400px]">
            <iframe
              title="Адрес Елены Брежневой"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.0272649445774!2d37.6092273!3d55.7608268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2z0KLQstC10YDRgdC60LDRjyDRg9C7Liwg0JzQvtGB0LrQstCw!5e0!3m2!1sru!2sru!4v1655897671824!5m2!1sru!2sru"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
