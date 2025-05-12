
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface Collection {
  id: number;
  name: string;
  season: string;
  year: number;
  description: string;
  images: string[];
}

const Collections = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const collections: Collection[] = [
    {
      id: 1,
      name: "ЭЛЕГАНТНОСТЬ",
      season: "Осень-Зима",
      year: 2025,
      description: "Коллекция 'Элегантность' вдохновлена архитектурой классицизма и воплощает собой изысканность и утонченность. Строгие силуэты, благородные ткани и внимание к деталям создают образы, которые никогда не выйдут из моды.",
      images: [
        "https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1288",
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=928",
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1288",
        "https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1288",
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=928",
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1288"
      ]
    },
    {
      id: 2,
      name: "АВАНГАРД",
      season: "Весна-Лето",
      year: 2025,
      description: "Коллекция 'Авангард' — это смелый взгляд на современную моду. Экспериментальные формы, необычные сочетания фактур и яркие акценты создают уникальные и запоминающиеся образы для тех, кто не боится выделяться.",
      images: [
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=928",
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1288",
        "https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1288",
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=928",
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1288",
        "https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1288"
      ]
    },
    {
      id: 3,
      name: "НАСЛЕДИЕ",
      season: "Осень-Зима",
      year: 2024,
      description: "Коллекция 'Наследие' черпает вдохновение из богатых культурных традиций и переосмысливает их в контексте современной моды. Тщательно подобранные ткани и ручная вышивка демонстрируют мастерство и уважение к истории.",
      images: [
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1288",
        "https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1288",
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=928",
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=928",
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1288",
        "https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1288"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#F9F9F9] pt-24 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="font-cormorant text-4xl md:text-5xl text-center mb-16 text-[#333333]">
          КОЛЛЕКЦИИ
        </h1>
        
        <Tabs defaultValue={collections[0].id.toString()} className="w-full">
          <TabsList className="w-full mb-12 bg-transparent justify-center flex-wrap gap-2">
            {collections.map((collection) => (
              <TabsTrigger 
                key={collection.id} 
                value={collection.id.toString()}
                className="font-montserrat text-sm tracking-wide px-6 py-3 data-[state=active]:text-[#D4AF37] data-[state=active]:border-b-2 data-[state=active]:border-[#D4AF37] data-[state=active]:shadow-none"
              >
                {collection.name} {collection.season} {collection.year}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {collections.map((collection) => (
            <TabsContent key={collection.id} value={collection.id.toString()}>
              <div className="max-w-5xl mx-auto">
                <div className="mb-12">
                  <h2 className="font-cormorant text-3xl mb-4 text-[#333333]">
                    {collection.name}
                  </h2>
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <span className="font-montserrat text-sm text-[#666666]">
                      {collection.season} {collection.year}
                    </span>
                  </div>
                  <p className="font-montserrat text-base text-[#666666] leading-relaxed max-w-3xl">
                    {collection.description}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {collection.images.map((image, index) => (
                    <div 
                      key={index} 
                      className="cursor-pointer overflow-hidden group"
                      onClick={() => setSelectedImage(image)}
                    >
                      <div className="overflow-hidden">
                        <img 
                          src={image} 
                          alt={`${collection.name} ${index + 1}`}
                          className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="mt-3">
                        <h3 className="font-montserrat text-sm text-[#333333]">
                          {collection.name} • Модель {index + 1}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
      
      {/* Modal for full-size image view */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh]">
            <button 
              className="absolute top-4 right-4 text-white hover:text-[#D4AF37] transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <img 
              src={selectedImage} 
              alt="Увеличенное фото"
              className="max-h-[85vh] max-w-full object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Collections;
