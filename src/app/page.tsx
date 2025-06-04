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

import LetsWorkTogether from '@/components/LetsWorkTogether';

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <motion.section
    transition={transition1_s}
    className='flex flex-col gap-y-20 lg:gap-y-24 overflow-x-hidden'>
      

      {/* HERO CONTAINER  */}
      <div className='container mx-auto flex flex-col items-center gap-y-4 lg:gap-y-10'>
        

        {/* hero  */}
        <div className='flex flex-col items-center mt-20'>
          
          {/* hero lines  */}
          <div className='flex flex-row justify-center items-center gap-x-2 md:gap-x-4 z-40'>
            <div>
              <motion.h1 variants={upward} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1} className='h1'>Élevez-vous</motion.h1>
            </div>
            <div className='w-[25%] lg:w-full max-w-[9.5rem] lg:h-full max-h-[3.4rem] overflow-hidden relative'>
              <img src="/sla.webp" className='w-full h-full object-cover' alt=""/>
              <motion.div variants={leftward} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1} className='absolute black h-full top-0 bottom-auto left-auto right-0'></motion.div>
            </div>
          </div>
          <div>
            <motion.h1 variants={upward} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1} className='h1'>Vers le nouveau</motion.h1>
          </div>
          </div>
          {/* text  */}
          <div className='mx-[1.2rem]'>
            <motion.p variants={upward} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1_d}
            className={`p large text-center`} >Faites passer votre entreprise à un autre niveau en prenant la bonne décision avec HDeveloper.</motion.p>
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
      <div className='container mx-auto flex flex-col items-center gap-y-16'>
        {/* who we are  */}
        <div className='flex flex-col md:flex-row gap-6 px-4'>
          {/* img  */}
          <motion.div variants={righttoleft} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1} className='hidden md:flex w-full max-w-[28rem] rounded-[2.5rem] p-[1rem] grey'>
            <img className='rounded-[2.5rem] flex object-cover' src='/pic.png'/>
          </motion.div>
          <div className='flex flex-col gap-y-6 '>
            <div className='md:ml-8 flex flex-col items-center md:items-start'>
              <div className='flex flex-row items-center gap-x-4'>
                <motion.h2 variants={upward} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1} className='h2'>Derrière</motion.h2>
                  <div className='relative'>
                    <img src="/sla.webp" className='w-full max-w-[81px] md:max-w-[178px]' alt="" />
                    <motion.div variants={leftward} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1_d} className='absolute black h-full top-0 bottom-auto left-auto right-0'></motion.div>
                  </div>
              </div>
              {/* hero lines  */}
              <div className='flex flex-row items-center gap-x-4'>
                  <motion.h2 variants={upward} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1_d} className='h2'>HDeveloper</motion.h2>
              </div>
            </div>
            {/* info  */}
            <motion.div variants={lefttoright} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1} className='flex flex-col grey max-w-[30rem] h-full rounded-[2.5rem] p-8 justify-around'>
              <p className={`p regular tracking-widest leading-5`}>Bonjour! Je m'appelle Dheysson Souza, je suis développeur web passionné par la création de solutions numériques innovantes et fonctionnelles.</p>
              <p className={`p regular tracking-widest leading-5`}>Je maîtrise différentes technologies et j'adopte une approche axée sur les résultats, transformant les idées en produits digitaux percutants.</p>
              <p className={`p regular tracking-widest leading-5`}>Pour moi, la clé d'une expérience utilisateur exceptionnelle réside dans la combinaison harmonieuse du design, de l'utilisabilité et d'un code propre.</p>
              <br />
              {/* technologies */}
              <div className='space-y-6'>
                <h6 className='h6'>technologies que j'utilise</h6>
                <div className='flex flex-row gap-x-4'>
                  <img width={64} height={64} alt='typescript' src='https://pbs.twimg.com/profile_images/1648471227416346625/v84A9gXA_400x400.png'></img>
                  <img width={64} height={64} alt='nodejs' src='https://wearenodev.github.io/img/icon/nodejs.png'></img>
                  <img width={64} height={64} alt='next' className='rounded-md' src='https://cmscritic.com/ms-content/uploads/2023/08/nextjs-product-logo.jpeg?format=auto&width=256'></img>
                  <img width={64} height={64} alt='react' src='https://bognarjunior.wordpress.com/wp-content/uploads/2018/03/if_react-js_logo_1174949.png'></img>
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
      <div className='flex flex-col items-center gap-y-12 lg:gap-y-16 grey_medium'>
        <motion.div variants={upward} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1} className='flex flex-col items-center gap-y-16 m-10'>
          <h2 className='h2'>Services</h2>
          <div className='max-w-[62rem] grid md:grid-cols-2 gap-[1.25rem]'>
            <div className='grid_box left_top'>
              <h6 className='h6'>Design Graphique</h6>
              <p className={`p medium leading-5`}>Votre marque mérite d’être mémorable. Nous transformons vos idées en identités visuelles captivantes qui non seulement impressionnent, mais reflètent l’essence de votre message avec clarté et impact. Créons ensemble une image qui connectera réellement votre public à vous !</p>
            </div>
            <div className='grid_box right_top'>
              <h6 className='h6'>Design et Développement Web</h6>
              <p className={`p medium leading-5`}>Votre marque mérite d’être mémorable. Nous transformons vos idées en identités visuelles captivantes qui non seulement impressionnent, mais reflètent l’essence de votre message avec clarté et impact. Créons ensemble une image qui connectera réellement votre public à vous !</p>
            </div>
            <div className='grid_box left_bottom'>
              <h6 className='h6'>Design UX/UI</h6>
              <p className={`p medium leading-5`}>Transformez l’interaction en connexion ! Nous créons des interfaces intuitives qui rendent la navigation simple et engageante, en assurant que vos utilisateurs se sentent à l’aise tout en explorant le meilleur de votre produit.</p>
            </div>
            <div className='grid_box right_bottom'>
              <h6 className='h6'>SEO</h6>
              <p className={`p medium leading-5`}>Soyez trouvé par ceux qui comptent vraiment ! Nous mettons en œuvre des stratégies SEO intelligentes pour augmenter la visibilité de votre site et le positionner en tête des résultats de recherche. Attirez plus de trafic et faites briller votre marque en ligne.</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* my recent projects  */}
      <div className='container mx-auto'>
        <div className='container mx-auto flex flex-col items-center gap-y-12 lg:gap-y-16 w-[100%] max-w-[75rem] h-full relative px-4'>
          <motion.div variants={upward} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1_s} className='flex flex-col items-center m-4 md:m-10'>
            <motion.h2 variants={item} className='h2'>Projets</motion.h2>
            {/* hero lines  */}
            <motion.div variants={item} className='flex flex-row items-center justify-around gap-x-2'>
              <h2 className='h2'>récents</h2>
              <div className='flex items-center w-[25%] md:w-full max-w-[6.2rem] h-[3.5rem] relative'>
                <img src="/shape_small.webp" alt="" />
                <motion.div variants={leftward} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1} className='absolute black h-full top-0 bottom-auto left-auto right-0' ></motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* projects  */}
          <motion.div variants={upward} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1} className='w-full max-w-[75rem] flex flex-col justify-center'>
            <div className='border-b-2 border-b-[--grey-medium]'>
						<a className='a project_title text-[1.2rem] md:text-[1.5rem] flex h-[7.75rem] items-center relative' target='_blank' href="https://dehaes.vercel.app/">
							<div>Website Design & Development for Schrijnwerkerij De Haes</div>
							<div className='project_image_container'>
								<img src="projects/dehaes.png" alt="" />
							</div>
							<div className='project'></div>
						</a>
					</div>
            <div className='border-b-2 border-b-[--grey-medium]'>
              <a className='a project_title text-[1.2rem] md:text-[1.5rem] flex h-[7.75rem] items-center relative' target='_blank' href="https://www.gmwconstructbe.com">
                <div>Web Design & Development pour GMW Construct</div>
                <div className='project_image_container'>
                  <img src="projects/gmwconstruct.png" alt="" />
                </div>
                <div className='project'></div>
              </a>
            </div>
            <div className='border-b-2 border-b-[--grey-medium]'>
              <a className='a project_title text-[1.2rem] md:text-[1.5rem] flex h-[7.75rem] items-center relative' target='_blank' href="https://portfoliohygorfonseca.vercel.app/">
                <div>Web Design & Development pour Hygor Fonseca (Photographe)</div>
                <div className='project_image_container'>
                  <img src="projects/hygorfonseca.png" alt="" />
                </div>
                <div className='project'></div>
              </a>
            </div>
            <div className='border-b-2 border-b-[--grey-medium]'>
              <a className='a project_title text-[1.2rem] md:text-[1.5rem] flex h-[7.75rem] items-center relative' target='_blank' href="https://renatofernandes.vercel.app">
                <div>Web Design & Development pour Renato Fernandes (Photographe)</div>
                <div className='project_image_container'>
                  <img src="projects/renatofernandes.png" alt="" />
                </div>
                <div className='project'></div>
              </a>
            </div>

            <a href='/portfolio' className='mt-10 btn self-center'>Tous les projets</a>
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
  )
}
