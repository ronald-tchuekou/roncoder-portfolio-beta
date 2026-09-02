import envClient from '@src/lib/env/client'
import env from '@src/lib/env/server'

const GITHUB_GRAPHQL = 'https://api.github.com/graphql'
const REVALIDATE_SECONDS = 60 * 60

async function graphql<T>(query: string): Promise<T | null> {
   try {
      const res = await fetch(GITHUB_GRAPHQL, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
            Authorization: `bearer ${env.GITHUB_TOKEN}`,
         },
         body: JSON.stringify({ query }),
         next: { revalidate: REVALIDATE_SECONDS },
      })
      if (!res.ok) {
         console.error('GitHub GraphQL error:', res.status)
         return null
      }
      const json = await res.json()
      return (json.data as T) ?? null
   } catch (error) {
      console.error('GitHub GraphQL request failed:', error)
      return null
   }
}

type ContributionsData = {
   user?: { contributionsCollection?: { contributionCalendar?: { totalContributions?: number } } }
}

type StarsData = {
   user?: { repositories?: { nodes?: { stargazerCount: number }[] } }
}

export const GithubService = {
   /** Total contributions over the last year, or null when GitHub is unreachable. */
   async getGitHubContributions(): Promise<number | null> {
      const data = await graphql<ContributionsData>(`{
         user(login: "${envClient.NEXT_PUBLIC_GITHUB_USERNAME}") {
            contributionsCollection { contributionCalendar { totalContributions } }
         }
      }`)
      return data?.user?.contributionsCollection?.contributionCalendar?.totalContributions ?? null
   },

   /** Sum of stars across owned, non-fork repositories, or null when GitHub is unreachable. */
   async getGitHubStars(): Promise<number | null> {
      const data = await graphql<StarsData>(`{
         user(login: "${envClient.NEXT_PUBLIC_GITHUB_USERNAME}") {
            repositories(first: 100, ownerAffiliations: OWNER, isFork: false) {
               nodes { stargazerCount }
            }
         }
      }`)
      const nodes = data?.user?.repositories?.nodes
      if (!nodes) return null
      return nodes.reduce((acc, repo) => acc + repo.stargazerCount, 0)
   },
}
