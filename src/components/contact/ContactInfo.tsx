
import { Mail, Phone, MapPin } from "lucide-react";

interface ContactInfoItem {
  icon: React.ReactNode;
  title: string;
  content: string;
}

const ContactInfo = () => {
  const contactItems: ContactInfoItem[] = [
    {
      icon: <Mail className="h-5 w-5 text-white" />,
      title: "Электронная почта",
      content: "info@elenabrezhneva.com"
    },
    {
      icon: <Phone className="h-5 w-5 text-white" />,
      title: "Телефон",
      content: "+7 (123) 456-78-90"
    },
    {
      icon: <MapPin className="h-5 w-5 text-white" />,
      title: "Адрес",
      content: "Москва, ул. Тверская, 123"
    }
  ];

  return (
    <div className="space-y-6">
      {contactItems.map((item, index) => (
        <div key={index} className="flex items-start gap-4">
          <div className="p-3 bg-[#0D0D0D] rounded-md">
            {item.icon}
          </div>
          <div>
            <h3 className="font-montserrat text-lg font-medium mb-1 text-[#333333]">
              {item.title}
            </h3>
            <p className="font-montserrat text-[#666666]">
              {item.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
