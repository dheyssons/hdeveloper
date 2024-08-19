"use client";

import { motion } from 'framer-motion';

import { transition1 } from '../transitions/transition1';
import { transition1_d } from '../transitions/transition1_d';
import { transition1_s } from '../transitions/transition1_s';

import { upward } from '../variants/upward';
import { leftward } from '../variants/leftward';
import { item } from '../variants/item';
import { righttoleft } from '../variants/righttoleft';
import { lefttoright } from '../variants/lefttoright';

import { useState } from 'react'

import Drone from '../components/drone';

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <motion.section
    transition={transition1_s}
    className='flex flex-col gap-y-24 overflow-x-hidden'>
      

      {/* HERO CONTAINER  */}
      <div className='container mx-auto flex flex-col items-center gap-y-10'>
        

        {/* hero  */}
        <div className='flex flex-col items-center mt-20'>
          
          {/* DRONE  */}
          <Drone />
          
          {/* hero lines  */}
          <div className='flex flex-row justify-center items-center gap-x-2 md:gap-x-4 z-50'>
            <div>
              <motion.h1 variants={upward} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1} className='h1'>Eleve-se</motion.h1>
            </div>
            <div className='w-[25%] lg:w-full max-w-[9.5rem] lg:h-full max-h-[3.4rem] overflow-hidden relative'>
              <img src="/sla.webp" className='w-full h-full object-cover' alt=""/>
              <motion.div variants={leftward} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1} className='absolute black h-full top-0 bottom-auto left-auto right-0'></motion.div>
            </div>
          </div>
          <div>
            <motion.h1 variants={upward} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1} className='h1'>Para o novo</motion.h1>
          </div>
          </div>
          {/* text  */}
          <div className='mx-[1.2rem]'>
            <motion.p variants={upward} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1_d}
            className={`p large text-center`} >Eleve seu negócio para outro patamar com a decisão certa, assim como:</motion.p>
        </div>
        {/* logos  */}
        <motion.div variants={upward} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1_s} className='grid grid-cols-3 md:grid-cols-5 justify-center items-center gap-6 mx-4 px-4'>
          <motion.img width="150px" variants={item} src="/logos/logo_multisol.png" alt="" />
          <motion.img width="150px" variants={item} src="/logos/logo_gazin.png" alt="" />
          <motion.img width="150px" variants={item} src="/logos/logo_physicus.png" alt="" />
          <motion.img width="150px" variants={item} src="/logos/logo_serving.png" alt="" />
          <motion.img width="150px" variants={item} src="/logos/logo_wilnet.png" alt="" />
          <motion.img width="150px" variants={item} src="https://uploads-ssl.webflow.com/64747a96c35f97463da63b1b/64763471ec8ca6aa822ed8c2_logoipsum-262%201.svg" className='logos md:hidden' alt="" />
        </motion.div>
      </div>

      {/* WHO I AM  */}
      <div className='container mx-auto flex flex-col items-center gap-y-16'>
        {/* who we are  */}
        <div className='flex flex-col md:flex-row gap-6 px-4'>
          <div className='flex flex-col justify-between gap-y-6 '>
            <div className='md:ml-8 flex flex-col items-center md:items-start'>
              <motion.h2 variants={upward} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1} className='h2'>Quem sou</motion.h2>
              {/* hero lines  */}
              <div className='flex flex-row items-center gap-x-4'>
                <div className='relative'>
                  <img src="/sla.webp" className='w-full max-w-[81px] md:max-w-[178px]' alt="" />
                  <motion.div variants={leftward} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1_d} className='absolute black h-full top-0 bottom-auto left-auto right-0'></motion.div>
                </div>
                  <motion.h2 variants={upward} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1_d} className='h2'>eu</motion.h2>
              </div>
            </div>
            {/* info  */}
            <motion.div variants={lefttoright} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1} className='flex flex-col grey max-w-[28rem] rounded-[2.5rem] p-8 justify-end'>
              <h6 className='h6 mb-3'>3+ anos de experiência</h6>
              <p className={`p regular`}>Meu nome é Tiago, tenho 20 anos, desde de 2020 trabalhei como Produtor e Editor de vídeo, e atualmente trabalho como Videomaker profissional.</p>
              <br />
              <h6 className='h6 mb-3'>100+ projetos</h6>
              <p className={`p regular`}>Nullam id diam mattis, faucibus nibh condimentum, semper nunc.</p>
              <br />
              <h6 className='h6 mb-3'>35 team members</h6>
              <p className={`p regular`}>Pellentesque quam nullam id diam mattis, faucibus nibh condimentum, semper nunc.</p>
            </motion.div>
          </div>
          {/* img  */}
          <motion.div variants={righttoleft} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1} className='flex w-full max-w-[28rem] rounded-[2.5rem] p-[1rem] grey'>
            <img className='rounded-[2.5rem] flex object-cover' src='videomaker1.jpg'/>
          </motion.div>
        </div>

        {/*  text & button  */}
        <motion.div variants={upward} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1} className='flex flex-col gap-y-8 px-4'>
          <p className={`p text-[1.2rem] md:text-[1.5rem] text-center`}>Aliquam tincidunt in lectus in dictum. Phasellus sodales hendrerit vehicula. Vivamus imperdiet sed ipsum non placerat. Sed at cursus risus.</p>
          <button className='btn self-center'>Sobre</button>
        </motion.div>
      </div>

      {/* our services  */}
      <div className='flex flex-col items-center gap-y-16 grey_medium'>
        <motion.div variants={upward} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1} className='flex flex-col items-center gap-y-16 m-10'>
          <h2 className='h2'>Serviços</h2>
          <div className='max-w-[62rem] grid md:grid-cols-2 gap-[1.25rem]'>
            <div className='grid_box left_top'>
              <h6 className='h6'>Graphic Design</h6>
              <p className={`p medium`}>Nulla sed nulla vestibulum neque pharetra elementum sit amet non nunc. Fusce ut faucibus quam. Suspendisse lectus orci, pharetra in est at, malesuada placerat mauris.</p>
            </div>
            <div className='grid_box right_top'>
              <h6 className='h6'>Web Design & Development</h6>
              <p className={`p medium`}>Proin pharetra, felis non placerat scelerisque, lectus risus vulputate augue, eu tincidunt dolor orci at enim. Sed tincidunt enim sapien, eu mollis risus convallis a.</p>
            </div>
            <div className='grid_box left_bottom'>
              <h6 className='h6'>UX/UI Design</h6>
              <p className={`p medium`}>Quisque tristique posuere posuere. Mauris vitae sem in est malesuada sollicitudin sit amet non mauris. Vivamus ut placerat arcu.</p>
            </div>
            <div className='grid_box right_bottom'>
              <h6 className='h6'>SEO</h6>
              <p className={`p medium`}>Morbi mi purus, convallis in erat et, iaculis rutrum nisl. Sed mi sapien, molestie sit amet turpis a, dapibus tempus mauris.</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* my recent projects  */}
      <div className='container mx-auto'>
        <div className='container mx-auto flex flex-col items-center gap-y-16 w-[100%] max-w-[75rem] h-full relative px-4'>
          <motion.div variants={upward} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1_s} className='flex flex-col items-center m-4 md:m-10'>
            <motion.h2 variants={item} className='h2'>Meus projetos</motion.h2>
            {/* hero lines  */}
            <motion.div variants={item} className='flex flex-row items-center justify-around'>
              <h2 className='h2'>recentes</h2>
              <div className='flex items-center w-[25%] md:w-full max-w-[6.2rem] h-[3.5rem] relative'>
                <img src="/shape_small.webp" alt="" />
                <motion.div variants={leftward} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1} className='absolute black h-full top-0 bottom-auto left-auto right-0' ></motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* projects  */}
          <motion.div variants={upward} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1} className='w-full max-w-[75rem] flex flex-col justify-center'>
            <div className='border-b-2 border-b-[--grey-medium]'>
              <a className='a project_title text-[1.2rem] md:text-[1.5rem] flex h-[7.75rem] items-center relative' href="#">
                <div>Lorien Website Design</div>
                <div className='project_image_container'>
                  <img src="https://uploads-ssl.webflow.com/6476fe0149031242bb8dfb02/6478e5ef084aab490e915be9_simon-lee-R_6A6CovgIM-unsplash%20(1).jpg" alt="" />
                </div>
                <div className='project'></div>
              </a>
            </div>
            <div className='border-b-2 border-b-[--grey-medium]'>
              <a className='a project_title text-[1.2rem] md:text-[1.5rem] flex h-[7.75rem] items-center relative' href="#">
                <div>Digital Branding for TriOne</div>
                <div className='project_image_container'>
                  <img src="https://uploads-ssl.webflow.com/6476fe0149031242bb8dfb02/647704443beb0b2857bbc8d7_silvio-kundt-pOZGBVICxDc-unsplash-min.jpg" alt="" />
                </div>
                <div className='project'></div>
              </a>
            </div>
            <div className='border-b-2 border-b-[--grey-medium]'>
              <a className='a project_title text-[1.2rem] md:text-[1.5rem] flex h-[7.75rem] items-center relative' href="#">
                <div>Web Development for QuickRop</div>
                <div className='project_image_container'>
                  <img src="https://uploads-ssl.webflow.com/6476fe0149031242bb8dfb02/6477025ee45b8de2e02aab90_and-machines-p9Of0dvgvcs-unsplash.jpg" alt="" />
                </div>
                <div className='project'></div>
              </a>
            </div>

            <a href='/projects' className='mt-10 btn self-center'>Todos projetos</a>
          </motion.div>

        </div>
      </div>

      {/* Testimonials  */}
      <div className='container mx-auto flex flex-col items-center gap-y-16 px-4'>
        <motion.div variants={upward} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1} className='flex flex-col items-center grey w-[100%] max-w-[75rem] mx-auto text-center py-10 rounded-[2.5rem] gap-y-16 px-6'>
          <h2 className='h2'>Testimonials</h2>

          {/* testimonial img  */}
          <div className='flex flex-row gap-x-4 md:gap-x-16'>
            <img onClick={() => setActiveTestimonial(0)} className={`testimonial_img ${activeTestimonial == 0 ? 'active' : '' }`} src="https://uploads-ssl.webflow.com/64747a96c35f97463da63b1b/6477b3b8df2631cdcd1d0602_tes1.webp" alt="" />
            <img onClick={() => setActiveTestimonial(1)} className={`testimonial_img ${activeTestimonial == 1 ? 'active' : '' }`} src="https://uploads-ssl.webflow.com/64747a96c35f97463da63b1b/6477b371794c06c0e6cbf1b2_tes3.webp" alt="" />
            <img onClick={() => setActiveTestimonial(2)} className={`testimonial_img ${activeTestimonial == 2 ? 'active' : '' }`} src="https://uploads-ssl.webflow.com/64747a96c35f97463da63b1b/6477b3c572021272a7580bc3_tes2.webp" alt="" />
          </div>

          {/* testimonial info  */}
          <div>
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
          </div>

        </motion.div>
      </div>

      {/* Lets work together  */}
      <div className='flex flex-col items-center relative'>
        <div className='flex flex-col items-center gap-y-6 md:gap-y-16 w-full bg-cover bg-[url("/facade.webp")]'>
          <div className='mt-6 md:mt-10 bg-[rgba(30,30,30,0.6)] w-full max-w-[22rem] md:max-w-[70rem] rounded-[2.5rem]'>
            <div className='flex flex-col items-center py-[2rem] md:py-[3rem] px-[0.5rem] gap-y-6'>
              <h2 className='h2 text-[1.7rem] text-center'>Vamos trabalhar juntos</h2>
              <p className={`p text-[1rem] md:text-[1.5rem] text-center`}>Morbi elementum tellus non nunc fringilla, tempor imperdiet ex aliquam. Integer lacinia viverra blandit.</p>
            </div>
          </div>
          
          <button className='btn_light m-10'>Vamos conversar</button>
        </div>

        <motion.div variants={leftward} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1} className='absolute black h-full top-0 bottom-auto left-auto right-0'></motion.div>
      </div>
    </motion.section>
  )
}
