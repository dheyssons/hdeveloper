"use client";

import { motion } from "framer-motion";

import { upward } from "../../../variants/upward";
import { leftward } from "../../../variants/leftward";
import { transition1 } from "../../../transitions/transition1";
import { transition1_s } from "../../../transitions/transition1_s";
import { transition1_d } from "../../../transitions/transition1_d";

import LetsWorkTogether from "@/components/LetsWorkTogether";
import { useTranslations } from "next-intl";

export default function Projects() {
  const t = useTranslations("ProjectsPage");

  return (
    <motion.section transition={transition1_s}>
      <div className="container mx-auto flex flex-col items-center gap-y-[8rem] px-4">
        {/* title  */}
        <div className="flex flex-col text-center mt-20 gap-y-12">
          {/* hero lines  */}
          <div className="flex flex-col items-center">
            <div className="flex flex-row items-center gap-x-4 md:gap-x-8">
              <motion.h1
                variants={upward}
                initial="variantInit"
                whileInView="variantAnim"
                transition={transition1}
                viewport={{ once: true }}
                className="h1"
              >
                {t("Title.FirstPart")}
              </motion.h1>
              <div className="flex flex-row justify-center items-center w-[8rem] md:w-[12rem] h-[4rem] relative">
                <img src="/mask.webp" alt="" />
                <motion.div
                  variants={leftward}
                  initial="variantInit"
                  whileInView="variantAnim"
                  transition={transition1}
                  viewport={{ once: true }}
                  className="absolute black h-full top-0 bottom-auto left-auto right-0"
                ></motion.div>
              </div>
            </div>
            <motion.h1
              variants={upward}
              initial="variantInit"
              whileInView="variantAnim"
              transition={transition1_d}
              viewport={{ once: true }}
              className="h1"
            >
              {t("Title.SecondPart")}
            </motion.h1>
          </div>
        </div>

        {/* projects  */}
        <motion.div
          variants={upward}
          initial="variantInit"
          whileInView="variantAnim"
          viewport={{ once: true }}
          transition={transition1}
          className="w-full max-w-[75rem] flex flex-col justify-center"
        >
          <div className="border-b-2 border-b-[--grey-medium]">
            <a
              className="a project_title text-[1.2rem] md:text-[1.5rem] flex h-[7.75rem] items-center relative"
              target="_blank"
              href="https://schrijnwerkerij-dehaes.be/"
            >
              <div>{t("ProjectItems.DeHaes")}</div>
              <div className="project_image_container">
                <img src="/projects/dehaes.webp" alt="" />
              </div>
              <div className="project"></div>
            </a>
          </div>

          <div className="border-b-2 border-b-[--grey-medium]">
            <a
              className="a project_title text-[1.2rem] md:text-[1.5rem] flex h-[7.75rem] items-center relative"
              target="_blank"
              href="https://www.gmwconstructbe.com/"
            >
              <div>{t("ProjectItems.GMWConstruct")}</div>
              <div className="project_image_container">
                <img src="/projects/gmwconstruct.webp" alt="" />
              </div>
              <div className="project"></div>
            </a>
          </div>

          <div className="border-b-2 border-b-[--grey-medium]">
            <a
              className="a project_title text-[1.2rem] md:text-[1.5rem] flex h-[7.75rem] items-center relative"
              target="_blank"
              href="https://portfoliohygorfonseca.vercel.app/"
            >
              <div>{t("ProjectItems.HygorFonseca")}</div>
              <div className="project_image_container">
                <img src="/projects/hygorfonseca.webp" alt="" />
              </div>
              <div className="project"></div>
            </a>
          </div>

          <div className="border-b-2 border-b-[--grey-medium]">
            <a
              className="a project_title text-[1.2rem] md:text-[1.5rem] flex h-[7.75rem] items-center relative"
              href="#"
            >
              <div>{t("ProjectItems.Placeholder")}</div>
              <div className="project_image_container">
                <img
                  src="/projects/placeholder.png"
                  className="object-cover flex"
                  alt=""
                />
              </div>
              <div className="project"></div>
            </a>
          </div>
        </motion.div>
      </div>

      <LetsWorkTogether />
    </motion.section>
  );
}
