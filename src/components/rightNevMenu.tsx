import Link from "next/link";
import React, { useState } from "react";
import { motion } from "motion/react";

interface MenuItems {
  title: string;
  sub: string[];
  href: string;      // 무시됨
  subHref: string[]; // 실제 사용됨
}

interface RightNevMenuProps {
  rightNevHovered: boolean;
  menuItems: MenuItems[];
}

const RightNevMenu: React.FC<RightNevMenuProps> = ({ rightNevHovered, menuItems }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <div
      className={`text-white fixed z-100 top-0 right-0 w-full max-w-240 h-screen bg-[url('/rightNevMenuBackground.jpg')] bg-cover transition-transform duration-300 ${
        rightNevHovered ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="w-full h-full pt-62.5 pl-22.5">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index} className="mb-12">
              <button
                onClick={() =>
                  selectedIndex === index ? setSelectedIndex(null) : setSelectedIndex(index)
                }
                className="font-bold text-4xl"
              >
                {item.title}
              </button>

              <motion.div
                initial={false}
                animate={{ height: selectedIndex === index ? "auto" : 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <ul className="mt-2">
                  {item.sub.map((subItem, subIndex) => (
                    <li key={subIndex} className="text-xl">
                      <Link className="w-full" href={item.subHref[subIndex]}>
                        - {subItem}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RightNevMenu;
