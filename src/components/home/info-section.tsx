"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from '@src/i18n/routing'
import { CloudDownload, LinkedinIcon } from "lucide-react";
import { useLocale, useTranslations } from 'next-intl'
import { FC, useCallback } from "react";
import { RevealFromBottom } from "../motions/reveal-from-bottom";

export const InfoSection: FC = () => {
	const t = useTranslations('home')
	const locale = useLocale()

	const downloadResume = useCallback(() => {
		const a = document.createElement('a')
		a.setAttribute('href', `/resumes/ronald-tchuekou-resume-${locale}.pdf`)
		a.setAttribute('download', `Ronald-Tchuekou-Resume-${locale}.pdf`)
		a.click()
	}, [locale])

  return (
     <section
        className={cn(
           'order-2 md:order-1',
           'flex flex-col gap-5 items-center md:items-start justify-center',
           'text-center md:text-left'
        )}
     >
        <RevealFromBottom elt={'p'} className='text-muted-foreground'>
           {t('full_stack_developer')}
        </RevealFromBottom>
        <RevealFromBottom
           elt={'h1'}
           delay={0.2}
           className={cn('scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl font-mono')}
        >
           {t('hi_is')} <br /> <span className='text-primary'>Ronald Tchuekou</span>
        </RevealFromBottom>
        <RevealFromBottom elt={'p'} delay={0.3}>
           <span className='block'>{t('i_create_web_and_mobile_platforms')}</span>
           <span className='block'>{t('i_use_many_languages')}</span>
        </RevealFromBottom>
        {/* Socials buttons */}
        <div className={cn('flex gap-3')}>
           {/* LinkedIn */}
           <RevealFromBottom delay={0.4}>
              <Link href={'https://linkedin.com/in/ronald-tchuekou'} target='_blank'>
                 <Button
                    size={'icon'}
                    title='LinkedIn'
                    aria-label='LinkedIn'
                    className='border-primary rounded-full text-primary'
                    variant={'outline'}
                 >
                    <LinkedinIcon className='size-5' />
                 </Button>
              </Link>
           </RevealFromBottom>
           {/* GitHub */}
           <RevealFromBottom delay={0.5}>
              <Link href='https://github.com/ronald-tchuekou' target='_blank'>
                 <Button
                    size={'icon'}
                    title='GitHub'
                    aria-label='GitHub'
                    className='border-primary rounded-full text-primary'
                    variant={'outline'}
                 >
                    <svg role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' className='size-5'>
                       <path
                          fill='currentColor'
                          stroke='none'
                          d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'
                       />
                    </svg>
                 </Button>
              </Link>
           </RevealFromBottom>
           {/* Twitter X */}
           <RevealFromBottom delay={0.6}>
              <Link href={'https://x.com/TchuekouRonald'} target='_blank'>
                 <Button
                    size={'icon'}
                    title='X'
                    aria-label='X'
                    className='border-primary rounded-full text-primary'
                    variant={'outline'}
                 >
                    <svg role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' className='size-5'>
                       <path
                          fill='currentColor'
                          stroke='none'
                          d='M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z'
                       />
                    </svg>
                 </Button>
              </Link>
           </RevealFromBottom>
           {/* YouTube */}
           <RevealFromBottom delay={0.7}>
              <Link href={'https://youtube.com/@ronaldtchuekou'} target='_blank'>
                 <Button size={'icon'} className='border-primary rounded-full text-primary' variant={'outline'}>
                    <svg role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' className='size-5'>
                       <title>YouTube</title>
                       <path
                          fill='currentColor'
                          stroke='none'
                          d='M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z'
                       />
                    </svg>
                 </Button>
              </Link>
           </RevealFromBottom>
        </div>
        {/* Download resume button */}
        <RevealFromBottom delay={0.8}>
           <Button onClick={downloadResume} className={cn('rounded-full')}>
              {t('download_my_resume')}
              <CloudDownload className='size-4 ml-3' />
           </Button>
        </RevealFromBottom>
     </section>
  )
};
