"use client";

import { RiMenuLine } from "react-icons/ri";

import { motion } from "framer-motion";
import { transition1 } from "../transitions/transition1";
import { fade } from "../variants/fade";
import { dropdown } from "../variants/dropdown";

import { useState } from "react";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./languageselector";

export default function Header() {
  const t = useTranslations("Header");

  const [openMenu, SetOpenMenu] = useState(false);
  const handleMenu = () => {
    if (!openMenu) {
      SetOpenMenu(true);
    } else {
      SetOpenMenu(false);
    }
  };

  return (
    <header className="flex sticky w-full h-24 justify-center items-center z-50">
      <motion.nav
        variants={fade}
        initial="variantInit"
        animate="variantAnim"
        transition={transition1}
        className="grey flex w-full max-w-[21rem] lg:max-w-max justify-center items-center h-[80px] rounded-full border-[1px] border-[#fff] mt-4"
      >
        <ul className="flex flex-row gap-x-10 w-full justify-between items-center m-2">
          <li className="hidden lg:block">
            <a className="tab a" href="/">
              {t("NavItems.Home")}
            </a>
          </li>
          <li className="hidden lg:block">
            <a className="tab a" title="portfolio" href="/portfolio">
              {t("NavItems.Projects")}
            </a>
          </li>
          <li>
            <img
              alt="logo"
              className="max-w-[64px] rounded-full m-4"
              src="/logo.png"
            ></img>
          </li>
          <li className="hidden lg:block">
            <LanguageSwitcher />
          </li>
          {/* Uncomment when needed */}
          {/* <li className="hidden lg:block">
                    <a className='tab a' title='about' href="/about">{t("NavItems.About")}</a>
                </li>
                <li className="hidden lg:block">
                    <a className='tab a' title='contact' href="/contact">{t("NavItems.Contact")}</a>
                </li> */}
          <li className="block lg:hidden">
            <a href="#" onClick={() => handleMenu()}>
              <RiMenuLine className="text-[#fff] w-[1.5rem] h-[1.5rem] m-4" />
            </a>
          </li>
        </ul>
        <motion.div
          variants={dropdown}
          initial="variantInit"
          animate={openMenu ? "variantAnim" : "variantExit"}
          className="fixed -z-[1] w-full max-w-[17rem] h-full max-h-[300px] bg-[--grey] rounded-[2.5rem]"
        >
          <nav className="flex flex-col h-full justify-center items-center">
            <ul className="flex flex-col h-full gap-y-10 items-center justify-center">
              <li>
                <a className="mtab a" href="/">
                  {t("MobileMenu.Home")}
                </a>
              </li>
              <li>
                <a className="mtab a" href="/portfolio">
                  {t("MobileMenu.Projects")}
                </a>
              </li>
              {/* Uncomment when needed */}
              {/* <li><a className='mtab a' href="/about">{t("Header.MobileMenu.About")}</a></li>
                        <li><a className='mtab a' href="/contact">{t("Header.MobileMenu.Contact")}</a></li> */}
              <li>
                <a className="mtab a" href="">
                  {t("MobileMenu.Contact")}
                </a>
              </li>
              <li>
                <LanguageSwitcher />
              </li>
            </ul>
          </nav>
        </motion.div>
      </motion.nav>
    </header>
  );
}
