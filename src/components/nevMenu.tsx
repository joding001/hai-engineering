import Link from "next/link";
import React, { useState } from "react";

interface NevMenuProps {
  setNevMenuHovered?: (bool:boolean) => void;
}

const NevMenu: React.FC<NevMenuProps> = (props) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

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
      hover:h-52.5 hover:w-120
      overflow-y-hidden overflow-x-visible transition-[height, width] duration-300 ease-in-out
      flex"
      onMouseEnter={() => props.setNevMenuHovered && props.setNevMenuHovered(true)}
      onMouseLeave={() => props.setNevMenuHovered && props.setNevMenuHovered(false)}
      >
      {/* 전체 hover 시 하얀 배경 */}

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
              <Link href={item.href} className="w-full h-full flex justify-center items-center">{item.title}</Link>
            </li>
            {/* 서브 메뉴 */}
            <ul className={`py-5
              ${
                activeIndex === index
                ? "bg-gray-100"
                : ""
              }
            `}>
              {item.sub.map((sub, subIdx) => (
                <li className="py-2 flex justify-center items-center" key={subIdx}>
                  <Link href={item.subHref[subIdx]} className="h-6">{sub}</Link>
                </li>
              ))}
            </ul>
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default NevMenu;
