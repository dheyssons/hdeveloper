"use client";

import { motion } from "framer-motion";

import { transition1 } from "../../transitions/transition1";
import { transition1_d } from "../../transitions/transition1_d";
import { transition1_s } from "../../transitions/transition1_s";

import { upward } from "../../variants/upward";
import { leftward } from "../../variants/leftward";
import { item } from "../../variants/item";
import { righttoleft } from "../../variants/righttoleft";
import { lefttoright } from "../../variants/lefttoright";

import LetsWorkTogether from "@/components/LetsWorkTogether";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <motion.section
      transition={transition1_s}
      className="flex flex-col gap-y-20 lg:gap-y-24 overflow-x-hidden"
    >
      {/* HERO CONTAINER  */}
      <div className="container mx-auto flex flex-col items-center gap-y-4 lg:gap-y-10">
        {/* hero  */}
        <div className="flex flex-col items-center mt-20">
          {/* hero lines  */}
          <div className="flex flex-row justify-center items-center gap-x-2 md:gap-x-4 z-40">
            <div>
              <motion.h1
                variants={upward}
                initial="variantInit"
                whileInView="variantAnim"
                viewport={{ once: true }}
                transition={transition1}
                className="h2 hero_line1 text-[2.25rem] md:text-[6rem]"
              >
                {t("Hero.HeroLine1")}
              </motion.h1>
            </div>
            <div className="w-[25%] lg:w-full max-w-[9.5rem] lg:h-full max-h-[3.4rem] overflow-hidden relative">
              <img
                src="/sla.webp"
                className="w-full h-full object-cover"
                alt=""
              />
              <motion.div
                variants={leftward}
                initial="variantInit"
                whileInView="variantAnim"
                viewport={{ once: true }}
                transition={transition1}
                className="absolute black h-full top-0 bottom-auto left-auto right-0"
              ></motion.div>
            </div>
          </div>
          <div>
            <motion.h1
              variants={upward}
              initial="variantInit"
              whileInView="variantAnim"
              viewport={{ once: true }}
              transition={transition1}
              className="h2 text-[2.25rem] md:text-[6rem]"
            >
              {t("Hero.HeroLine2")}
            </motion.h1>
          </div>
        </div>
        {/* text  */}
        <div className="mx-[1.2rem]">
          <motion.p
            variants={upward}
            initial="variantInit"
            whileInView="variantAnim"
            viewport={{ once: true }}
            transition={transition1_d}
            className={`p large text-center`}
          >
            {t("Hero.Description")}
          </motion.p>
        </div>
        {/* logos  */}
        {/* <motion.div variants={upward} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1_s} className='grid grid-cols-3 md:grid-cols-5 justify-center items-center gap-6 mx-4 px-4'>
          <motion.img width="150px" variants={item} src="/logos/logo_multisol.png" alt="" />
          <motion.img width="150px" variants={item} src="/logos/logo_gazin.png" alt="" />
          <motion.img width="150px" variants={item} src="/logos/logo_physicus.png" alt="" />
          <motion.img width="150px" variants={item} src="/logos/logo_serving.png" alt="" />
          <motion.img width="150px" variants={item} src="/logos/logo_wilnet.png" alt="" />
          <motion.img width="150px" variants={item} src="https://uploads-ssl.webflow.com/64747a96c35f97463da63b1b/64763471ec8ca6aa822ed8c2_logoipsum-262%201.svg" className='logos md:hidden' alt="" />
        </motion.div> */}
      </div>

      {/* WHO I AM  */}
      <div className="container mx-auto flex flex-col items-center gap-y-16">
        {/* who we are  */}
        <div className="flex flex-col md:flex-row gap-6 px-4">
          {/* img  */}
          <motion.div
            variants={righttoleft}
            initial="variantInit"
            whileInView="variantAnim"
            viewport={{ once: true }}
            transition={transition1}
            className="hidden md:flex w-full max-w-[28rem] rounded-[2.5rem] p-[1rem] grey"
          >
            <img
              className="rounded-[2.5rem] flex object-cover"
              src="/pic.png"
            />
          </motion.div>
          <div className="flex flex-col gap-y-6 ">
            <div className="md:ml-8 flex flex-col items-center md:items-start">
              <div className="flex flex-row items-center gap-x-4">
                <motion.h2
                  variants={upward}
                  initial="variantInit"
                  whileInView="variantAnim"
                  viewport={{ once: true }}
                  transition={transition1}
                  className="h4 text-[2rem] md:text-[3rem]"
                >
                  {t("WhoIAm.Title1")}
                </motion.h2>
                <div className="relative">
                  <img
                    src="/sla.webp"
                    className="w-full max-w-[81px] md:max-w-[144px]"
                    alt=""
                  />
                  <motion.div
                    variants={leftward}
                    initial="variantInit"
                    whileInView="variantAnim"
                    viewport={{ once: true }}
                    transition={transition1_d}
                    className="absolute black h-full top-0 bottom-auto left-auto right-0"
                  ></motion.div>
                </div>
              </div>
              {/* hero lines  */}
              <div className="flex flex-row items-center gap-x-4">
                <motion.h2
                  variants={upward}
                  initial="variantInit"
                  whileInView="variantAnim"
                  viewport={{ once: true }}
                  transition={transition1_d}
                  className="h2"
                >
                  {t("WhoIAm.Title2")}
                </motion.h2>
              </div>
            </div>
            {/* info  */}
            <motion.div
              variants={lefttoright}
              initial="variantInit"
              whileInView="variantAnim"
              viewport={{ once: true }}
              transition={transition1}
              className="flex flex-col grey max-w-[30rem] h-full rounded-[2.5rem] p-6 md:p-8 justify-around"
            >
              <p className={`p regular tracking-widest leading-5`}>
                {t("WhoIAm.Paragraph1")}
              </p>
              <p className={`p regular tracking-widest leading-5`}>
                {t("WhoIAm.Paragraph2")}
              </p>
              <p className={`p regular tracking-widest leading-5`}>
                {t("WhoIAm.Paragraph3")}
              </p>
              <br />
              {/* technologies */}
              <div className="space-y-6">
                <h6 className="h6">{t("WhoIAm.TechnologiesTitle")}</h6>
                <div className="flex flex-row gap-x-4">
                  <img
                    className="w-12 md:w-16"
                    alt="typescript"
                    src="https://pbs.twimg.com/profile_images/1648471227416346625/v84A9gXA_400x400.png"
                  ></img>
                  <img
                    className="w-12 md:w-16"
                    alt="nodejs"
                    src="https://wearenodev.github.io/img/icon/nodejs.png"
                  ></img>
                  <img
                    alt="next"
                    className="rounded-md w-12 md:w-16"
                    src="https://cmscritic.com/ms-content/uploads/2023/08/nextjs-product-logo.jpeg?format=auto&width=256"
                  ></img>
                  <img
                    className="w-12 md:w-16"
                    alt="react"
                    src="https://bognarjunior.wordpress.com/wp-content/uploads/2018/03/if_react-js_logo_1174949.png"
                  ></img>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/*  text & button  */}
        {/* <motion.div variants={upward} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1} className='flex flex-col gap-y-8 px-4'>
          <p className={`p text-[1.2rem] md:text-[1.5rem] text-center`}>Aliquam tincidunt in lectus in dictum. Phasellus sodales hendrerit vehicula. Vivamus imperdiet sed ipsum non placerat. Sed at cursus risus.</p>
          <button className='btn self-center'>Sobre</button>
        </motion.div> */}
      </div>

      {/* our services  */}
      <div className="flex flex-col items-center gap-y-12 lg:gap-y-16 grey_medium">
        <motion.div
          variants={upward}
          initial="variantInit"
          whileInView="variantAnim"
          viewport={{ once: true }}
          transition={transition1}
          className="flex flex-col items-center gap-y-16 m-4 md:m-10"
        >
          <h2 className="h2">{t("Services.Title")}</h2>
          <div className="max-w-[62rem] grid md:grid-cols-2 gap-[1.25rem]">
            <div className="grid_box left_top">
              <h6 className="h6">{t("Services.Service1.Title")}</h6>
              <p className={`p medium leading-5`}>
                {t("Services.Service1.Description")}
              </p>
            </div>
            <div className="grid_box right_top">
              <h6 className="h6">{t("Services.Service2.Title")}</h6>
              <p className={`p medium leading-5`}>
                {t("Services.Service2.Description")}
              </p>
            </div>
            <div className="grid_box left_bottom">
              <h6 className="h6">{t("Services.Service3.Title")}</h6>
              <p className={`p medium leading-5`}>
                {t("Services.Service3.Description")}
              </p>
            </div>
            <div className="grid_box right_bottom">
              <h6 className="h6">{t("Services.Service4.Title")}</h6>
              <p className={`p medium leading-5`}>
                {t("Services.Service4.Description")}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* my recent projects  */}
      <div className="container mx-auto">
        <div className="container mx-auto flex flex-col items-center gap-y-12 lg:gap-y-16 w-[100%] max-w-[75rem] h-full relative px-4">
          <motion.div
            variants={upward}
            initial="variantInit"
            whileInView="variantAnim"
            viewport={{ once: true }}
            transition={transition1_s}
            className="flex flex-col items-center m-4 md:m-10"
          >
            <motion.h2 variants={item} className="h2">
              {t("Projects.Title")}
            </motion.h2>
            {/* hero lines  */}
            <motion.div
              variants={item}
              className="flex flex-row items-center justify-around gap-x-2"
            >
              <h2 className="h2">{t("Projects.Subtitle")}</h2>
              <div className="flex items-center w-[25%] md:w-full max-w-[6.2rem] h-[3.5rem] relative">
                <img src="/shape_small.webp" alt="" />
                <motion.div
                  variants={leftward}
                  initial="variantInit"
                  whileInView="variantAnim"
                  viewport={{ once: true }}
                  transition={transition1}
                  className="absolute black h-full top-0 bottom-auto left-auto right-0"
                ></motion.div>
              </div>
            </motion.div>
          </motion.div>

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
                href="https://dehaes.vercel.app/"
              >
                <div>{t("Projects.Project1")}</div>
                <div className="project_image_container">
                  <img src="projects/dehaes.webp" alt="" />
                </div>
                <div className="project"></div>
              </a>
            </div>
            <div className="border-b-2 border-b-[--grey-medium]">
              <a
                className="a project_title text-[1.2rem] md:text-[1.5rem] flex h-[7.75rem] items-center relative"
                target="_blank"
                href="https://www.gmwconstructbe.com"
              >
                <div>{t("Projects.Project2")}</div>
                <div className="project_image_container">
                  <img src="projects/gmwconstruct.webp" alt="" />
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
                <div>{t("Projects.Project3")}</div>
                <div className="project_image_container">
                  <img src="projects/hygorfonseca.webp" alt="" />
                </div>
                <div className="project"></div>
              </a>
            </div>
            <div className="border-b-2 border-b-[--grey-medium]">
              <a
                className="a project_title text-[1.2rem] md:text-[1.5rem] flex h-[7.75rem] items-center relative"
                target="_blank"
                href="https://renatofernandes.vercel.app"
              >
                <div>{t("Projects.Project4")}</div>
                <div className="project_image_container">
                  <img src="projects/renatofernandes.webp" alt="" />
                </div>
                <div className="project"></div>
              </a>
            </div>

            <a href="/portfolio" className="mt-10 btn self-center text-center">
              {t("Projects.ViewAll")}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Testimonials  */}
      {/* <div className='container mx-auto flex flex-col items-center gap-y-16 px-4'>
        <motion.div variants={upward} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1} className='flex flex-col items-center grey w-[100%] max-w-[75rem] mx-auto text-center py-10 rounded-[2.5rem] gap-y-16 px-6'>
          <h2 className='h2'>Testimonials</h2> */}

      {/* testimonial img  */}
      {/* <div className='flex flex-row gap-x-4 md:gap-x-16'>
            <img onClick={() => setActiveTestimonial(0)} className={`testimonial_img ${activeTestimonial == 0 ? 'active' : '' }`} src="https://uploads-ssl.webflow.com/64747a96c35f97463da63b1b/6477b3b8df2631cdcd1d0602_tes1.webp" alt="" />
            <img onClick={() => setActiveTestimonial(1)} className={`testimonial_img ${activeTestimonial == 1 ? 'active' : '' }`} src="https://uploads-ssl.webflow.com/64747a96c35f97463da63b1b/6477b371794c06c0e6cbf1b2_tes3.webp" alt="" />
            <img onClick={() => setActiveTestimonial(2)} className={`testimonial_img ${activeTestimonial == 2 ? 'active' : '' }`} src="https://uploads-ssl.webflow.com/64747a96c35f97463da63b1b/6477b3c572021272a7580bc3_tes2.webp" alt="" />
          </div> */}

      {/* testimonial info  */}
      {/* <div>
            <p className={`p large min-h-[8rem]`}>
              { activeTestimonial == 0 ? 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut posuere vel lacus vel vehicula. Mauris rutrum ante sapien, eget venenatis est aliquet non.' : ''}
              { activeTestimonial == 1 ? 'Mauris rutrum ante sapien, eget venenatis est aliquet non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut posuere vel lacus vel vehicula.' : ''}
              { activeTestimonial == 2 ? 'Ut posuere vel lacus vel vehicula. Mauris rutrum ante sapien, eget venenatis est aliquet non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' : ''}
            </p>
   
            <br />

            <div className='testimonials_author_information'>
              <div className={`testimonial_author text-[1.125rem]`}>
                { activeTestimonial == 0 ? 'Larry Warner' : '' }
                { activeTestimonial == 1 ? 'John Pearson' : '' }
                { activeTestimonial == 2 ? 'Siena Whitney' : '' }
              </div>

              <div className={`testimonial_author_job p small`}>
                { activeTestimonial == 0 ? 'Digital Project Manager' : '' }
                { activeTestimonial == 1 ? 'Web Developer' : '' }
                { activeTestimonial == 2 ? 'Web Designer' : '' }
              </div>
            </div>              
          </div> */}

      {/* </motion.div>
      </div> */}

      <LetsWorkTogether />
    </motion.section>
  );
}
