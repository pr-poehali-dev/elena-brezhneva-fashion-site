import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import SocialLinks from "@/components/contact/SocialLinks";
import GoogleMap from "@/components/contact/GoogleMap";

const Contact = () => {
  const mapConfig = {
    address: "Москва, ул. Тверская",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.0272649445774!2d37.6092273!3d55.7608268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2z0KLQstC10YDRgdC60LDRjyDRg9C7Liwg0JzQvtGB0LrQstCw!5e0!3m2!1sru!2sru!4v1655897671824!5m2!1sru!2sru",
  };

  return (
    <div className="min-h-screen bg-[#F9F9F9] pt-24 pb-20">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <h1 className="font-cormorant text-4xl md:text-5xl text-center mb-6 text-[#333333]">
            СВЯЖИТЕСЬ С НАМИ
          </h1>
          <p className="font-montserrat text-center text-[#666666] max-w-2xl mx-auto">
            У вас возникли вопросы или предложения? Заполните форму ниже или
            воспользуйтесь другими способами связи.
          </p>
        </header>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-1">
              <ContactInfo />
              <SocialLinks />
            </div>

            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>

        <div className="mt-20">
          <GoogleMap
            address={mapConfig.address}
            embedUrl={mapConfig.embedUrl}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
