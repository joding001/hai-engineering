import Link from "next/link";
import React, { useEffect, useState } from "react";

interface MenuItems {
  title: string;
  sub: string[];
  href: string;
  subHref: string[];
}

interface NevMenuProps {
  setNevMenuHovered?: (bool:boolean) => void;
  menuItems: MenuItems[];
}

const NevMenu: React.FC<NevMenuProps> = (props) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 100);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const menuItems : { title: string; sub: string[]; href: string; subHref: string[]; }[] = [
    {
      title: "회사소개",
      sub: ["인사말", "오시는길"],
      href: "/company/01",
      subHref: ["/company/01", "/company/02"]
    },
    {
      title: "사업분야",
      sub: ["수자원부", "구조부"],
      href: "/business/01",
      subHref: ["/business/01", "/business/02"]
    },
    {
      title: "홍보센터",
      sub: ["뉴스", ""],
      href: "/promotion/01",
      subHref: ["/promotion/01", ""]
    },
    {
      title: "고객지원",
      sub: ["Q&A", "인재채용"],
      href: "/support/01",
      subHref: ["/support/01", "/support/02"]
    },
  ];

  return (
    <ul className="peer group absolute left-1/2 -translate-x-1/2
      w-108 h-25 self-start
      hover:h-55 hover:w-120 hidden lg:flex
      overflow-y-hidden overflow-x-visible transition-[height, width] duration-300 ease-in-out
      flex"
      onMouseEnter={() => props.setNevMenuHovered && props.setNevMenuHovered(true)}
      onMouseLeave={() => props.setNevMenuHovered && props.setNevMenuHovered(false)}
      >

      {menuItems.map((item, index) => (
        <li
          key={index}
          className="w-[25%] h-full"
          onMouseEnter={() => setActiveIndex(index)}
          onMouseLeave={() => setActiveIndex(null)}
        >
          <ul>
            <li className={`
              w-full h-25 transition-[color] duration-300 border-transparent border-t-4 border-b-4 
              ${
                activeIndex === index
                ? "border-b-sky-400 text-sky-400"
                : ""
              }
            `}>
              <Link href={item.href} className={`w-full h-full flex justify-center items-center group-hover:text-black ${isScrolled == true ? "text-black" : "text-white" }`}>{item.title}</Link>
            </li>
            <li>
              {/* 서브 메뉴 */}
              <ul className={`h-30 flex flex-col justify-center
                ${
                  activeIndex === index
                  ? "bg-gray-100 "
                  : " "
                }
                ${
                  index < 3
                  ? "border-r border-r-gray-200"
                  : ""
                }
              `}>
                {item.sub.map((sub, subIdx) => (
                  <li className="py-2 flex justify-center items-center" key={subIdx}>
                    <Link href={item.subHref[subIdx]} className="h-6 block after:content-[''] after:w-0 hover:after:w-full after:transition-[width] after:duration-300 after:relative after:-top-1  after:block after:h-px after:bg-black">{sub}</Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default NevMenu;
