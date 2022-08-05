import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCoffee } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex justify-center items-center py-[30px]">
      <p>
        Made with <FontAwesomeIcon icon={faHeart} /> by <Link href="https://github.com/hoangviet97">Vítek</Link>
      </p>
    </div>
  );
};

export default Footer;
