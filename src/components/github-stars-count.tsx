import { GithubService } from '@src/services/github.service'
import { useTranslations } from 'next-intl'

type Props = {
   t: ReturnType<typeof useTranslations>
}

export const GitHubStarsCount = async ({ t }: Props) => {
   const count = await GithubService.getGitHubStars()

   return (
      <>
         <p className='text-5xl font-extrabold text-foreground'>{count}</p>
         <p>
            Github <br /> {t('stars')}
         </p>
      </>
   )
}
