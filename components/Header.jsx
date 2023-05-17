import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CgMenuGridO } from "react-icons/cg";
import { logos, socialMedia, socialMediaUrl } from "@/data";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { linkdein, github } = socialMediaUrl;
  const toggleClass = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="container mx-auto md:flex justify-between max-width">
      <div className="flex justify-between items-center py-4 md:py-10">
        <Link href="/">
          <Image className="w-14" src={logos.logo} alt="logo" />
        </Link>
        <div onClick={toggleClass} className="cursor-pointer">
          <CgMenuGridO className="text-4xl stroke-dark-heading dark:stroke-white md:hidden" />
        </div>
      </div>
      <nav
        className={` ${
          !isOpen ? "hidden" : null
        } text-center md:flex justify-between`}
      >
        <ul className="dark:text-light-content font-medium md:flex items-center md:space-x-5 md:mr-10">
          <li className="pb-1 md:pb-0">
            <Link href="/" onClick={toggleClass}>
              Home
            </Link>
          </li>
          <li className="pb-1 md:pb-0">
            <Link href="/about" onClick={toggleClass}>
              About
            </Link>
          </li>
          <li className="pb-1 md:pb-0">
            <Link href="/technologies" onClick={toggleClass}>
              Technologies
            </Link>
          </li>
          <li className="pb-1 md:pb-0">
            <Link href="/projects" onClick={toggleClass}>
              Projects
            </Link>
          </li>
          <li className="pb-1 md:pb-0">
            <Link href="/contact" onClick={toggleClass}>
              Contact
            </Link>
          </li>
          <li className="btn bg-greenbg text-cyan-600 text-xs font-bold rounded-3xl px-3 py-1 min-w-fit">
            <Link
              href="/Abhishek_Kolapkar_Resume.pdf"
              download="Abhishek_Kolapkar_Resume"
            >
              Download Resume
            </Link>
          </li>
        </ul>
        <ul className="flex justify-evenly items-center my-5 md:my-0 md:space-x-5 md:mr-5">
          <li>
            <a href={linkdein} target="_blank" rel="noreferrer noopener">
              <Image
                src={socialMedia.linkdein}
                alt="linkedin"
                width={30}
                height={30}
                className="dark:fill-light-heading fill-dark-heading"
              />
            </a>
          </li>
          <li>
            <a href={github} target="_blank" rel="noreferrer noopener">
              <Image
                src={socialMedia.github}
                alt="linkedin"
                width={30}
                height={30}
              />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
