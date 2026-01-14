import Link from "next/link";
import React, { useState } from "react";

const DropDownMenu = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const menuItems : { title: string; sub: string[]; href: string }[] = [
    {
      title: "회사소개",
      sub: ["인사말", "오시는길"],
      href: "#",
    },
    {
      title: "사업분야",
      sub: ["수자원부", "구조부"],
      href: "#",
    },
    {
      title: "홍보센터",
      sub: ["뉴스"],
      href: "#",
    },
    {
      title: "고객지원",
      sub: ["Q&A", "인재채용"],
      href: "#",
    },
  ];

  return (
    <ul className="peer group absolute left-1/2 -translate-x-1/2
      w-108 h-25 self-start
      hover:h-52.5 hover:w-145
      overflow-y-hidden overflow-x-visible transition-[height, width] duration-500
      flex">
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
                  w-full h-25 flex justify-center items-center transition-[color] duration-200 border-transparent border-t-4 border-b-4 
                    ${
                      activeIndex === index
                        ? "border-b-sky-400 text-sky-400"
                        : ""
                    }
            `}>
              <Link href={item.href}>{item.title}</Link>
            </li>
            {/* 서브 메뉴 */}
            <ul className="py-5">
              {item.sub.map((sub, subIdx) => (
                <li key={subIdx} className="py-2 flex justify-center items-center">
                  {sub}
                </li>
              ))}
            </ul>
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default DropDownMenu;
