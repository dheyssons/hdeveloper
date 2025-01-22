'use client';

import { Archivo } from 'next/font/google';
const archivo = Archivo({subsets: ['latin'], weight: ['400','600']});

import { motion } from 'framer-motion'

import { transition1 } from '../transitions/transition1'
import { upward } from '../variants/upward' 


export default function Footer() {
	return (
		<footer className='mt-[4rem]'>
			<motion.div variants={upward} whileInView="variantAnim" viewport={{once: true}} transition={transition1} className='container mx-auto flex flex-col w-full max-w-[75rem] gap-y-[2rem]'>
				<div className='flex flex-row justify-between'>
					{/* menu  */}
					<div className='flex flex-col gap-y-6 px-6'>
						<a className={`${archivo.className} p medium text-[#ffffff] font-[600] leading-[1] after:content-[''] after:w-[3rem] after:mt-1 after:h-[2px] after:bg-[#1e02f2] after:block`}>Menu</a>
						<a href='/' className={`${archivo.className} p hover:text-[#ffffffa1] transition-all`}> Accueil </a>
						<a href='/portfolio' className={`${archivo.className} p hover:text-[#ffffffa1] transition-all`}> Projets </a>
						{/* <a href='/about' className={`${archivo.className} p hover:text-[#ffffffa1] transition-all`}> À propos de moi </a> */}
						<a href='/contact' className={`${archivo.className} p hover:text-[#ffffffa1] transition-all`}> Contact </a>
					</div>

					<div className='flex flex-col items-center px-6'>
						{/* icon & text  */}
						{/* <div className='flex flex-col items-center w-full max-w-[30rem]'>
							<img src="/logo.png" className='w-full max-w-[64px] h-full max-h-[64px] mb-3' alt="" />
							<p className={`${archivo.className} p small mb-10 w-[8rem] md:w-full`}></p>
						</div> */}
						
						{/* social media  */}
						<div className='flex flex-col md:flex-col justify-between'>
							<div className=' flex flex-col gap-y-10'>
								<nav>
									<ul className='flex flex-col md:flex-row gap-4 md:gap-10'>
										<li><a className={`${archivo.className} social_link btn_light`} href="mailto:dheyssonsousasilva@gmail.com" target='_blank'>Email</a></li>
										<li><a className={`${archivo.className} social_link btn_light`} href="https://api.whatsapp.com/send?phone=5562993127493" target='_blank'>Whatsapp</a></li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
				</div>
				<div className='mx-4 w-[75%] md:w-full max-w-[75rem] h-[2px] bg-[#2c2c2c] self-center'></div>
				<p className={`${archivo.className} p small self-center text-center m-[1rem]`}>Copyright © 2025 Dheysson Souza.</p>
			</motion.div>
		</footer>
    )
}