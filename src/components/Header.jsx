import { useEffect, useState } from "react";
import cross_icon from "../assets/cross_icon.svg";
import menu_icon from "../assets/menu_icon.svg";

const sectionIds = [
  "Home",
  "About",
  "Experience",
  "Projects",
  "Designs",
  "Contact",
];

export const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [activeLink, setActiveLink] = useState("#Home");

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [showMobileMenu]);

  // Scrollspy effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.5 } // section must be at least 50% visible
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => {
      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  // Handle click smooth scroll
  const handleNavClick = (href) => {
    setActiveLink(href);
    setShowMobileMenu(false);

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className="navbar sticky top-0 z-50 w-full bg-black text-white px-4 sm:px-6 lg:px-10 py-3 flex justify-between items-center">
      <h1 className="text-xl sm:text-2xl font-bold cursor-pointer">
        <span className="text-orange-500">Tanisha </span>
        <span className="text-white">Chauhan</span>
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex gap-6 font-medium text-sm xl:text-base">
        {sectionIds.map((id) => {
          const href = `#${id}`;
          return (
            <button
              key={id}
              onClick={() => handleNavClick(href)}
              className={`hover:text-orange-400 cursor-pointer transition duration-200 ${
                activeLink === href
                  ? "border-b-2 border-orange-500 pb-1 text-orange-400"
                  : ""
              }`}
            >
              {id}
            </button>
          );
        })}
      </ul>

      {/* Mobile Menu Button */}
      <img
        src={menu_icon}
        alt="menu"
        className="lg:hidden w-6 sm:w-7 cursor-pointer"
        onClick={() => setShowMobileMenu(true)}
      />

      {/* Mobile Menu Drawer */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-[85%] xs:w-[75%] sm:w-[65%] bg-white text-black z-50 transition-transform duration-300 ease-in-out ${
          showMobileMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <img
            src={cross_icon}
            alt="close"
            className="w-6 cursor-pointer"
            onClick={() => setShowMobileMenu(false)}
          />
        </div>

        {/* Menu Items */}
        <ul className="flex flex-col items-center gap-6 mt-6 text-base font-medium">
          {sectionIds.map((id) => {
            const href = `#${id}`;
            return (
              <button
                key={id}
                onClick={() => handleNavClick(href)}
                className={`hover:text-orange-500 transition ${
                  activeLink === href ? "border-b-2 border-orange-500" : ""
                }`}
              >
                {id}
              </button>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
