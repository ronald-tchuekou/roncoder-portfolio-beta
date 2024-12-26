import { cn } from "@/lib/utils";
import { Container } from "@src/components/container";
import { ResumeSideBar } from '@src/components/resume/side-bar'

type Props = {
   params: Promise<{ locale: string; project_id: string }>
   children: React.ReactNode
}

export default function ResumeLayout({ children }: Props) {
   return (
      <main>
         <Container className={cn('grid grid-cols-1 md:grid-cols-12 gap-10 py-10 lg:py-20')}>
            <div className={cn('md:col-span-4')}>
               <ResumeSideBar />
            </div>
            <div className={cn('md:col-span-8')}>{children}</div>
         </Container>
      </main>
   )
}
