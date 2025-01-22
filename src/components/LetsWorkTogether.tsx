'use clienet'

import { motion } from 'framer-motion';
import { leftward } from '@/variants/leftward';
import { transition1 } from '@/transitions/transition1';


export default function LetsWorkTogether() {
    return (
        <section>
            <div className='flex flex-col items-center relative'>
            <div className='flex flex-col items-center gap-y-6 md:gap-y-16 w-full bg-cover bg-[url("/facade.webp")]'>
                <div className='mt-6 md:mt-10 bg-[rgba(30,30,30,0.6)] w-full max-w-[22rem] md:max-w-[70rem] rounded-[2.5rem]'>
                <div className='flex flex-col items-center py-[2rem] md:py-[3rem] px-[0.5rem] gap-y-6'>
                    <h2 className='h2 text-[1.7rem] text-center'>Travaillons ensemble</h2>
                    <p className={`p text-[1rem] md:text-[1.2rem] text-center`}>Je suis toujours à la recherche de nouveaux défis et d'opportunités pour collaborer sur des projets passionnants. Si vous avez une idée ou si vous souhaitez faire passer votre entreprise au niveau supérieur, n'hésitez pas à me contacter ! Discutons ensemble pour voir comment je peux contribuer au succès de votre projet.</p>
                </div>
                </div>
                
                <a target='_blank' href='https://api.whatsapp.com/send?phone=5562993127493' className='btn_light m-10 '>Contactez-moi</a>
            </div>

            <motion.div variants={leftward} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1} className='absolute black h-full top-0 bottom-auto left-auto right-0'></motion.div>
            </div>
        </section>
    )
}