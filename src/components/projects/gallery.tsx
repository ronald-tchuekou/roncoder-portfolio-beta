"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowLeftIcon, ArrowRightIcon, XIcon } from "lucide-react";
import Image from "next/image";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { RevealFromBottom } from "../motions/reveal-from-bottom";

export type GalleryProps = { images: string[] };

export const Gallery: FC<GalleryProps> = ({ images }) => {
  const [subImages, setSubImages] = useState<string[]>([]);

  const [preview, setPreview] = useState<number>(-1);

  const previewImage = useCallback((index: number) => {
    setPreview(index);
  }, []);

  useEffect(() => {
    setSubImages(images.slice(0, 3));
  }, [images]);

  return (
     <>
        <section className={cn('flex flex-row flex-wrap gap-5')}>
           {subImages.map((image, idx) => (
              <RevealFromBottom
                 delay={idx * 0.1}
                 key={`image-${idx}`}
                 onClick={() => previewImage(idx)}
                 className={cn('aspect-video w-[150px]', 'cursor-pointer')}
              >
                 <Image
                    src={image}
                    alt={image}
                    width={300}
                    height={120}
                    quality={100}
                    placeholder='blur'
                    blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM0XL+lHgAEwgIVSfhUvgAAAABJRU5ErkJggg=='
                    className={cn('aspect-auto size-full')}
                 />
              </RevealFromBottom>
           ))}
           {images.length > subImages.length && (
              <RevealFromBottom
                 onClick={() => setPreview(subImages.length)}
                 delay={3 * 0.1}
                 className={cn('aspect-video w-[150px] relative', 'cursor-pointer')}
              >
                 <Image
                    src={images[subImages.length]}
                    alt={images[subImages.length]}
                    width={300}
                    height={120}
                    priority
                    quality={100}
                    placeholder='blur'
                    blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM0XL+lHgAEwgIVSfhUvgAAAABJRU5ErkJggg=='
                    className={cn('aspect-auto size-full')}
                 />
                 <div className='absolute inset-0 bg-black/50 flex justify-center items-center'>
                    <p className='text-4xl font-medium text-foreground'>+{images.length - subImages.length}</p>
                 </div>
              </RevealFromBottom>
           )}
        </section>
        {preview !== -1 && <GallerySlide images={images} index={preview} onClose={() => setPreview(-1)} />}
     </>
  )
};

const GallerySlide = ({ images, index, onClose }: { images: string[]; index: number; onClose: VoidFunction }) => {
   const slideRef = useRef<Slider>(null)

   return (
      <div
         className={cn(
            'z-20',
            'fixed top-0 left-0 h-screen w-screen backdrop-blur bg-black/10',
            'flex justify-center items-center'
         )}
      >
         <div className={cn('max-w-screen-lg mx-auto flex flex-col', 'w-full')}>
            <div className='flex justify-end px-4'>
               <Button onClick={onClose} size={'icon'}>
                  <XIcon className='size-6' />
               </Button>
            </div>
            <div className='flex w-full items-center'>
               <div className='flex-none flex justify-center items-center'>
                  <Button onClick={() => slideRef.current?.slickPrev()} size={'icon'} className='rounded-full'>
                     <ArrowLeftIcon className='size-6' />
                  </Button>
               </div>

               <div style={{ width: 'calc(100% - 80px)' }}>
                  <Slider ref={slideRef} initialSlide={index} prevArrow={<></>} nextArrow={<></>} className='w-full'>
                     {images.map((image, idx) => (
                        <div key={`image-${idx}`} className='rounded-3xl w-full aspect-auto px-2 lg:px-5 lg:py-10'>
                           <Image
                              priority
                              unoptimized
                              src={image}
                              alt={image}
                              width={300}
                              height={120}
                              placeholder='blur'
                              blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM0XL+lHgAEwgIVSfhUvgAAAABJRU5ErkJggg=='
                              className={cn('aspect-auto w-full rounded-3xl')}
                           />
                        </div>
                     ))}
                  </Slider>
               </div>

               <div className='flex-none flex justify-center items-center'>
                  <Button onClick={() => slideRef.current?.slickNext()} size={'icon'} className='rounded-full'>
                     <ArrowRightIcon className='size-6' />
                  </Button>
               </div>
            </div>
         </div>
      </div>
   )
}
