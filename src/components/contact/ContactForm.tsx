
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
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
    // В реальном приложении здесь был бы запрос к API
    console.log("Form submitted:", formData);
    
    toast({
      title: "Сообщение отправлено",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    
    // Сброс формы
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
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
  );
};

export default ContactForm;
