import React, { FC } from "react";
import Link from "next/link";

interface Props {
  href: string;
  text: string;
}

const NavItem: FC<Props> = ({ href, text }) => {
  return (
    <li className="py-2 hover:text-white text-stone-500">
      <Link href={href}>{text}</Link>
    </li>
  );
};

export default NavItem;
