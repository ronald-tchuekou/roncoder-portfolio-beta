'use client'

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { cn } from '@/lib/utils'
import useEmblaCarousel from 'embla-carousel-react'
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { FC, useCallback, useEffect, useState } from 'react'
import { RevealFromBottom } from '../motions/reveal-from-bottom'

const THUMBNAILS = 3

export type GalleryProps = { images: string[]; title: string }

export const Gallery: FC<GalleryProps> = ({ images, title }) => {
   const t = useTranslations('projects')
   const [openAt, setOpenAt] = useState<number | null>(null)

   if (images.length === 0) return null

   const thumbnails = images.slice(0, THUMBNAILS)
   const remaining = images.length - thumbnails.length

   return (
      <>
         <section className={cn('flex flex-row flex-wrap gap-5')} aria-label={title}>
            {thumbnails.map((image, idx) => (
               <RevealFromBottom delay={idx * 0.1} key={image}>
                  <button
                     type='button'
                     onClick={() => setOpenAt(idx)}
                     aria-label={t('gallery_of', { index: idx + 1, total: images.length })}
                     className={cn(
                        'aspect-video w-[150px] overflow-hidden rounded-md',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
                     )}
                  >
                     <Image
                        src={image}
                        alt=''
                        width={300}
                        height={169}
                        sizes='150px'
                        className='size-full object-cover'
                     />
                  </button>
               </RevealFromBottom>
            ))}
            {remaining > 0 && (
               <RevealFromBottom delay={THUMBNAILS * 0.1}>
                  <button
                     type='button'
                     onClick={() => setOpenAt(THUMBNAILS)}
                     aria-label={t('gallery_of', { index: THUMBNAILS + 1, total: images.length })}
                     className={cn(
                        'relative aspect-video w-[150px] overflow-hidden rounded-md',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
                     )}
                  >
                     <Image
                        src={images[THUMBNAILS]}
                        alt=''
                        width={300}
                        height={169}
                        sizes='150px'
                        className='size-full object-cover'
                     />
                     <span className='absolute inset-0 flex items-center justify-center bg-black/50 text-4xl font-medium text-white'>
                        +{remaining}
                     </span>
                  </button>
               </RevealFromBottom>
            )}
         </section>

         <Dialog open={openAt !== null} onOpenChange={(open) => !open && setOpenAt(null)}>
            <DialogContent
               className={cn('max-w-screen-lg w-[calc(100vw-2rem)] p-2 sm:p-4 bg-background/95 backdrop-blur')}
               aria-describedby={undefined}
            >
               <DialogTitle className='sr-only'>{title}</DialogTitle>
               {openAt !== null && <Lightbox images={images} startIndex={openAt} />}
            </DialogContent>
         </Dialog>
      </>
   )
}

const Lightbox = ({ images, startIndex }: { images: string[]; startIndex: number }) => {
   const t = useTranslations('projects')
   const [emblaRef, embla] = useEmblaCarousel({ startIndex, loop: images.length > 1 })
   const [current, setCurrent] = useState(startIndex)

   useEffect(() => {
      if (!embla) return
      const onSelect = () => setCurrent(embla.selectedScrollSnap())
      embla.on('select', onSelect)
      return () => {
         embla.off('select', onSelect)
      }
   }, [embla])

   const prev = useCallback(() => embla?.scrollPrev(), [embla])
   const next = useCallback(() => embla?.scrollNext(), [embla])

   return (
      <div className='flex flex-col gap-3'>
         <div ref={emblaRef} className='overflow-hidden rounded-xl'>
            <div className='flex'>
               {images.map((image, idx) => (
                  <div key={image} className='min-w-0 flex-[0_0_100%]'>
                     <Image
                        src={image}
                        alt={t('gallery_of', { index: idx + 1, total: images.length })}
                        width={1920}
                        height={1080}
                        sizes='(min-width: 1024px) 1024px, 100vw'
                        priority={idx === startIndex}
                        className='w-full h-auto max-h-[75vh] object-contain'
                     />
                  </div>
               ))}
            </div>
         </div>
         <div className='flex items-center justify-between gap-3 px-1'>
            <Button onClick={prev} size='icon' variant='outline' className='rounded-full' aria-label={t('previous')}>
               <ArrowLeftIcon className='size-5' />
            </Button>
            <p className='text-sm text-muted-foreground tabular-nums' aria-live='polite'>
               {t('gallery_of', { index: current + 1, total: images.length })}
            </p>
            <Button onClick={next} size='icon' variant='outline' className='rounded-full' aria-label={t('next')}>
               <ArrowRightIcon className='size-5' />
            </Button>
         </div>
      </div>
   )
}
