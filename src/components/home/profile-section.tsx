"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";

export const ProfileSection: FC = () => {
  return (
     <section className='py-10 order-1  md:order-2'>
        <div className='w-full relative'>
           <Image
              quality={100}
              src={'/profile_2.webp'}
              alt='Ronald Tchuekou'
              width={500}
              height={500}
              className={cn('aspect-square w-full h-auto rounded-full p-1')}
           />
           <motion.svg
              className={cn('absolute inset-0 rounded-full aspect-square text-primary')}
              viewBox={'0 0 100 100'}
              xmlns={'http://www.w3.org/2000/svg'}
              fill={'transparent'}
           >
              <motion.circle
                 cx={50}
                 cy={50}
                 r={50}
                 stroke={'currentColor'}
                 strokeWidth={1}
                 strokeLinecap={'round'}
                 strokeLinejoin={'round'}
                 initial={{ strokeDasharray: '4 8 12 20' }}
                 animate={{
                    strokeDasharray: ['2, 4, 6, 8', '4, 8, 12, 20', '2, 4, 6, 8'],
                    rotate: [120, 360],
                 }}
                 transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: 'reverse',
                 }}
              />
           </motion.svg>
        </div>
     </section>
  )
};
