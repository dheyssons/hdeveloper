"use client";

import { Archivo } from "next/font/google";
const archivo = Archivo({ subsets: ["latin"], weight: ["400", "600"] });

import { motion } from "framer-motion";

import { transition1 } from "../transitions/transition1";
import { upward } from "../variants/upward";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="mt-[4rem]">
      <motion.div
        variants={upward}
        whileInView="variantAnim"
        viewport={{ once: true }}
        transition={transition1}
        className="container mx-auto flex flex-col w-full max-w-[75rem] gap-y-[2rem]"
      >
        <div className="flex flex-row justify-between">
          {/* menu  */}
          <div className="flex flex-col gap-y-6 px-6">
            <a
              className={`${archivo.className} p medium text-[#ffffff] font-[600] leading-[1] after:content-[''] after:w-[3rem] after:mt-1 after:h-[2px] after:bg-[#26bcc9] after:block`}
            >
              {t("Menu.Title")}
            </a>
            <a
              href="/"
              className={`${archivo.className} p hover:text-[#ffffffa1] transition-all`}
            >
              {t("Menu.Home")}
            </a>
            <a
              href="/portfolio"
              className={`${archivo.className} p hover:text-[#ffffffa1] transition-all`}
            >
              {t("Menu.Projects")}
            </a>
            {/* Uncomment when needed */}
            {/* <a href='/about' className={`${archivo.className} p hover:text-[#ffffffa1] transition-all`}>
                        {t("Footer.Menu.About")}
                    </a>
                    <a href='/contact' className={`${archivo.className} p hover:text-[#ffffffa1] transition-all`}>
                        {t("Footer.Menu.Contact")}
                    </a> */}
          </div>

          <div className="flex flex-col items-center px-6">
            {/* social media  */}
            <div className="flex flex-col md:flex-col justify-between">
              <div className=" flex flex-col gap-y-10">
                <nav>
                  <ul className="flex flex-col md:flex-row gap-4 md:gap-10">
                    <li>
                      <a
                        className={`${archivo.className} social_link btn_light`}
                        href="mailto:dheyssonsousasilva@gmail.com"
                        target="_blank"
                      >
                        {t("Social.Email")}
                      </a>
                    </li>
                    <li>
                      <a
                        className={`${archivo.className} social_link btn_light`}
                        href="https://www.instagram.com/hdeveloper.dev/"
                        target="_blank"
                      >
                        {t("Social.Instagram")}
                      </a>
                    </li>
                    <li>
                      <a
                        className={`${archivo.className} social_link btn_light`}
                        href="https://api.whatsapp.com/send?phone=5569993850840"
                        target="_blank"
                      >
                        {t("Social.Whatsapp")}
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-4 w-[75%] md:w-full max-w-[75rem] h-[2px] bg-[#2c2c2c] self-center"></div>
        <p
          className={`${archivo.className} p small self-center text-center m-[1rem]`}
        >
          {t("Copyright")}
        </p>
      </motion.div>
    </footer>
  );
}
