
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-[#F9F9F9] pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1288" 
            alt="Елена Брежнева"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-cormorant text-5xl md:text-7xl font-light text-white mb-4 animate-fade-in">
            О ДИЗАЙНЕРЕ
          </h1>
        </div>
      </section>

      {/* Biography */}
      <section className="py-20 px-4 md:px-8 max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="font-cormorant text-3xl md:text-4xl mb-6 text-[#333333]">
            ЕЛЕНА БРЕЖНЕВА
          </h2>
          <p className="font-montserrat text-lg leading-relaxed text-[#666666]">
            Елена Брежнева — известный российский дизайнер одежды с более чем десятилетним опытом в индустрии моды.
          </p>
        </div>
        
        <div className="space-y-8 font-montserrat text-[#333333] leading-relaxed">
          <p>
            Родившись в семье творческих людей, Елена с детства проявляла интерес к дизайну и созданию одежды. После окончания престижной школы моды и дизайна, она начала свой профессиональный путь, работая с ведущими модными домами Европы.
          </p>
          
          <p>
            В 2015 году Елена представила миру свою первую самостоятельную коллекцию, которая мгновенно привлекла внимание критиков и модных экспертов. Её уникальный стиль, сочетающий элегантность классических линий с современными элементами, стал визитной карточкой бренда.
          </p>
          
          <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <img 
              src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=928" 
              alt="Работа над эскизами"
              className="w-full h-[400px] object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=928" 
              alt="В мастерской"
              className="w-full h-[400px] object-cover"
            />
          </div>
          
          <p>
            Философия Елены Брежневой основана на идее создания одежды, которая не только следует современным тенденциям, но и обладает вневременной элегантностью. Каждое изделие создается с исключительным вниманием к деталям, используя только лучшие материалы и инновационные техники пошива.
          </p>
          
          <p>
            За свою карьеру Елена была отмечена многочисленными наградами и признанием в мире моды. Её работы регулярно появляются на страницах ведущих модных изданий, а знаменитости часто выбирают её дизайны для красных дорожек и важных мероприятий.
          </p>
          
          <blockquote className="border-l-4 border-[#D4AF37] pl-6 py-2 my-8 italic">
            "Мода — это не просто одежда, это способ самовыражения и искусство, которое мы носим каждый день. Я стремлюсь создавать вещи, которые помогают людям чувствовать себя уверенно и комфортно, оставаясь при этом верными своей индивидуальности."
            <footer className="mt-2 font-normal text-[#666666]">— Елена Брежнева</footer>
          </blockquote>
          
          <p>
            Сегодня Елена Брежнева продолжает развивать свой бренд, экспериментируя с новыми формами и материалами, но всегда сохраняя уникальный стиль и высочайшее качество, которые стали синонимами её имени.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#0D0D0D] text-white">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <h2 className="font-cormorant text-3xl md:text-4xl text-center mb-16 text-[#D4AF37]">
            ЦЕННОСТИ И ФИЛОСОФИЯ
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-[#D4AF37] rounded-full">
                <span className="text-[#D4AF37] text-2xl">01</span>
              </div>
              <h3 className="font-montserrat text-xl mb-4">Устойчивое производство</h3>
              <p className="font-montserrat text-white/70 leading-relaxed">
                Мы стремимся минимизировать воздействие на окружающую среду, используя экологически чистые материалы и устойчивые методы производства.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-[#D4AF37] rounded-full">
                <span className="text-[#D4AF37] text-2xl">02</span>
              </div>
              <h3 className="font-montserrat text-xl mb-4">Вневременной дизайн</h3>
              <p className="font-montserrat text-white/70 leading-relaxed">
                Создание одежды, которая выходит за рамки сезонных трендов и остаётся актуальной и стильной на протяжении многих лет.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-[#D4AF37] rounded-full">
                <span className="text-[#D4AF37] text-2xl">03</span>
              </div>
              <h3 className="font-montserrat text-xl mb-4">Мастерство и качество</h3>
              <p className="font-montserrat text-white/70 leading-relaxed">
                Каждое изделие создается с исключительным вниманием к деталям высококвалифицированными мастерами с использованием лучших материалов.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 px-4 md:px-8 max-w-5xl mx-auto">
        <h2 className="font-cormorant text-3xl md:text-4xl text-center mb-16 text-[#333333]">
          ДОСТИЖЕНИЯ И НАГРАДЫ
        </h2>
        
        <div className="space-y-8">
          {[2022, 2020, 2018, 2016].map((year) => (
            <div key={year} className="flex flex-col md:flex-row gap-6 items-start border-b border-gray-200 pb-8">
              <div className="md:w-1/5">
                <span className="font-cormorant text-3xl text-[#D4AF37]">{year}</span>
              </div>
              <div className="md:w-4/5">
                <h3 className="font-montserrat text-xl mb-2 text-[#333333]">
                  {year === 2022 && "Международная премия в области моды"}
                  {year === 2020 && "Дизайнер года"}
                  {year === 2018 && "Лучшая коллекция сезона"}
                  {year === 2016 && "Прорыв года в индустрии моды"}
                </h3>
                <p className="font-montserrat text-[#666666] leading-relaxed">
                  {year === 2022 && "Признание за вклад в развитие устойчивой моды и инновационный подход к дизайну."}
                  {year === 2020 && "Звание лучшего дизайнера года по версии престижного модного издания."}
                  {year === 2018 && "Коллекция Весна-Лето получила признание критиков и была отмечена на Неделе моды."}
                  {year === 2016 && "Номинация за выдающиеся достижения молодого дизайнера в индустрии моды."}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
