
import { Instagram, Facebook, Twitter } from "lucide-react";

interface SocialLink {
  icon: React.ReactNode;
  url: string;
  label: string;
}

const SocialLinks = () => {
  const socialLinks: SocialLink[] = [
    {
      icon: <Instagram className="h-5 w-5 text-white" />,
      url: "https://instagram.com",
      label: "Instagram"
    },
    {
      icon: <Facebook className="h-5 w-5 text-white" />,
      url: "https://facebook.com",
      label: "Facebook"
    },
    {
      icon: <Twitter className="h-5 w-5 text-white" />,
      url: "https://twitter.com",
      label: "Twitter"
    }
  ];

  return (
    <div className="mt-12">
      <h3 className="font-montserrat text-lg font-medium mb-4 text-[#333333]">
        Социальные сети
      </h3>
      <div className="flex gap-4">
        {socialLinks.map((link, index) => (
          <a 
            key={index}
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-[#0D0D0D] rounded-md hover:bg-[#D4AF37] transition-colors"
            aria-label={link.label}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
