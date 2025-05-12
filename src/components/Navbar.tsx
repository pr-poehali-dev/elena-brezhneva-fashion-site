
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: "ГЛАВНАЯ", path: "/" },
    { name: "О ДИЗАЙНЕРЕ", path: "/about" },
    { name: "КОЛЛЕКЦИИ", path: "/collections" },
    { name: "КОНТАКТЫ", path: "/contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white bg-opacity-95 shadow-md py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className={`font-cormorant text-2xl font-light transition-colors duration-300 ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            ЕЛЕНА БРЕЖНЕВА
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`
                      font-montserrat text-sm tracking-wider transition-colors duration-300
                      ${isScrolled ? "text-black" : "text-white"}
                      ${isActive(link.path) ? (isScrolled ? "border-b border-black" : "border-b border-white") : ""}
                      hover:opacity-70
                    `}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger className="md:hidden">
              <Menu className={`h-6 w-6 ${isScrolled ? "text-black" : "text-white"}`} />
            </SheetTrigger>
            <SheetContent className="w-[300px] bg-white">
              <nav className="mt-12">
                <ul className="space-y-6">
                  {navLinks.map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className={`
                          font-montserrat text-lg tracking-wider block
                          ${isActive(link.path) ? "text-black font-medium" : "text-gray-500"}
                        `}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
