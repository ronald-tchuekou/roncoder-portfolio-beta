import { cn } from '@/lib/utils'
import { ContactForm } from '@src/components/contact/contact-form'
import { Container } from '@src/components/container'
import { RevealFromBottom } from '@src/components/motions/reveal-from-bottom'
import { Link } from '@src/i18n/routing'
import { METADATA } from '@src/resources/data/metadata'
import { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

export const metadata: Metadata = {
   title: 'Contact moi pour une meilleur prise en charge en développement de projets. | roncoder',
   description:
      'Je conçois et implémente des applications web et mobiles, design des prototypes professionnels pour décrire au mieux le scénario des fonctionnalités de vos applications.',
   keywords: [
      'roncoder portfolio contact',
      'contact roncoder',
      'contact roncoder portfolio',
      'Ronald Tchuekou Contact',
      'Contact Ronald Tchuekou',
   ],
   ...METADATA,
}

type Props = {
   params: Promise<{ locale: string }>
}

export default async function Page({ params }: Props) {
   const locale = (await params).locale

   // Enable static rendering
   setRequestLocale(locale)

   return (
      <main>
         <Container className={cn('grid grid-cols-1 md:grid-cols-12 gap-10 py-10 lg:py-20')}>
            <section className={cn('order-2 md:order-1 md:col-span-8')}>
               <RevealFromBottom className='w-full'>
                  <ContactForm />
               </RevealFromBottom>
            </section>
            <aside className={cn('order-1 md:order-2 md:col-span-4 space-y-5')}>
               <RevealFromBottom>
                  <Link
                     href={'https://wa.me/+237658172868'}
                     target='_blank'
                     className='flex items-center gap-3 group hover:bg-accent/20 rounded-xl transition duration-300'
                  >
                     <div className='flex justify-center items-center rounded-xl bg-accent/40 flex-none p-5'>
                        <svg
                           className='size-10 text-muted-foreground group-hover:text-primary transition duration-300'
                           viewBox='0 0 50 50'
                           fill='none'
                           xmlns='http://www.w3.org/2000/svg'
                        >
                           <g clipPath='url(#clip0_528_927)'>
                              <path
                                 fillRule='evenodd'
                                 clipRule='evenodd'
                                 d='M25.0003 4.16666C13.4941 4.16666 4.16699 13.4937 4.16699 25C4.16699 28.9375 5.26074 32.625 7.16283 35.7667L5.30449 42.0833C5.19779 42.446 5.19077 42.8307 5.28417 43.197C5.37756 43.5634 5.56792 43.8978 5.83524 44.1651C6.10256 44.4324 6.43695 44.6228 6.80328 44.7161C7.1696 44.8095 7.55432 44.8025 7.91699 44.6958L14.2337 42.8375C17.481 44.802 21.205 45.8382 25.0003 45.8333C36.5066 45.8333 45.8337 36.5062 45.8337 25C45.8337 13.4937 36.5066 4.16666 25.0003 4.16666ZM20.2878 29.7146C24.5024 33.9271 28.5253 34.4833 29.9462 34.5354C32.1066 34.6146 34.2107 32.9646 35.0295 31.05C35.132 30.8116 35.169 30.5502 35.1368 30.2928C35.1046 30.0353 35.0042 29.7911 34.8462 29.5854C33.7045 28.1271 32.1607 27.0792 30.6524 26.0375C30.3377 25.8192 29.9505 25.7316 29.5724 25.793C29.1944 25.8544 28.8548 26.06 28.6253 26.3667L27.3753 28.2729C27.3093 28.375 27.2069 28.4482 27.0889 28.4776C26.9709 28.507 26.8461 28.4904 26.7399 28.4312C25.892 27.9458 24.6566 27.1208 23.7691 26.2333C22.8816 25.3458 22.1066 24.1667 21.6712 23.3729C21.6185 23.2718 21.6036 23.1552 21.6292 23.044C21.6548 22.9329 21.7191 22.8346 21.8107 22.7667L23.7357 21.3375C24.0113 21.0991 24.1891 20.7675 24.2353 20.4061C24.2814 20.0448 24.1925 19.6791 23.9857 19.3792C23.0524 18.0125 21.9649 16.275 20.3878 15.1229C20.1839 14.9764 19.9455 14.885 19.6958 14.8576C19.4462 14.8302 19.1937 14.8678 18.9628 14.9667C17.0462 15.7875 15.3878 17.8917 15.467 20.0562C15.5191 21.4771 16.0753 25.5 20.2878 29.7146Z'
                                 fill='currentColor'
                              />
                           </g>
                           <defs>
                              <clipPath id='clip0_528_927'>
                                 <rect width={50} height={50} fill='white' />
                              </clipPath>
                           </defs>
                        </svg>
                     </div>
                     <div>
                        <p className='text-muted-foreground transition duration-300 group-hover:text-primary'>
                           WhatsApp
                        </p>
                        <p className='block text-lg'>(+237) 658 172 868</p>
                     </div>
                  </Link>
               </RevealFromBottom>
               {/* Mail */}
               <RevealFromBottom delay={0.1}>
                  <Link
                     href={'mailto:ronaldtchuekou@gmail.com'}
                     target='_blank'
                     className='flex items-center gap-3 group hover:bg-accent/20 rounded-xl transition duration-300'
                  >
                     <div className='flex justify-center items-center rounded-xl bg-accent/40 flex-none p-5'>
                        <svg
                           className='size-10 text-muted-foreground group-hover:text-primary transition duration-300'
                           viewBox='0 0 50 50'
                           fill='none'
                           xmlns='http://www.w3.org/2000/svg'
                        >
                           <path
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M10.417 41.6667C8.75939 41.6667 7.16968 41.0082 5.99757 39.8361C4.82547 38.664 4.16699 37.0743 4.16699 35.4167V14.5833C4.16699 12.9257 4.82547 11.336 5.99757 10.1639C7.16968 8.99181 8.75939 8.33333 10.417 8.33333H39.5837C41.2413 8.33333 42.831 8.99181 44.0031 10.1639C45.1752 11.336 45.8337 12.9257 45.8337 14.5833V35.4167C45.8337 37.0743 45.1752 38.664 44.0031 39.8361C42.831 41.0082 41.2413 41.6667 39.5837 41.6667H10.417ZM15.8857 17.125C15.6735 16.9438 15.4271 16.807 15.161 16.7229C14.8949 16.6388 14.6146 16.609 14.3368 16.6352C14.059 16.6615 13.7893 16.7433 13.5437 16.8758C13.2981 17.0083 13.0816 17.1888 12.9071 17.4066C12.7326 17.6244 12.6036 17.875 12.5278 18.1436C12.4521 18.4121 12.431 18.6932 12.4659 18.9701C12.5009 19.2469 12.5911 19.514 12.7312 19.7553C12.8713 19.9966 13.0585 20.2074 13.2816 20.375L21.0941 26.6271C22.2026 27.5146 23.5803 27.9982 25.0003 27.9982C26.4204 27.9982 27.7981 27.5146 28.9066 26.6271L36.7191 20.3771C36.9327 20.2061 37.1106 19.9947 37.2426 19.7549C37.3746 19.5152 37.458 19.2518 37.4882 18.9798C37.5184 18.7078 37.4947 18.4325 37.4185 18.1697C37.3423 17.9068 37.2151 17.6616 37.0441 17.4479C36.8731 17.2342 36.6617 17.0563 36.4219 16.9244C36.1822 16.7924 35.9188 16.7089 35.6468 16.6788C35.3748 16.6486 35.0995 16.6723 34.8367 16.7485C34.5738 16.8247 34.3286 16.9519 34.1149 17.1229L26.3024 23.3729C25.9329 23.6688 25.4737 23.8299 25.0003 23.8299C24.527 23.8299 24.0677 23.6688 23.6982 23.3729L15.8857 17.125Z'
                              fill='currentColor'
                           />
                        </svg>
                     </div>
                     <div>
                        <p className='text-muted-foreground transition duration-300 group-hover:text-primary'>Email</p>
                        <p className='block text-lg'>ronaldtchuekou@gmail.com</p>
                     </div>
                  </Link>
               </RevealFromBottom>
            </aside>
         </Container>
      </main>
   )
}
