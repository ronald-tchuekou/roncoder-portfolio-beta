import { GithubService } from '@src/services/github.service'

export const GitHubContributionCount = async () => {
   const count = await GithubService.getGitHubContributions()

   return (
      <>
         <p className='text-5xl font-extrabold text-foreground'>{count}</p>
         <p>
            Github <br /> Contributions
         </p>
      </>
   )
}
