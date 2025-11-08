import envClient from '@src/lib/env/client'
import env from '@src/lib/env/server'

const token = env.GITHUB_TOKEN
const username = envClient.NEXT_PUBLIC_GITHUB_USERNAME

console.log('token', token)
console.log('username', username)

export const GithubService = {
   async getGitHubContributions(): Promise<number> {
      try {
         const query = `{
   user(login: "${username}") {
      contributionsCollection {
         contributionCalendar {
         totalContributions
         }
      }
   }
}
`

         const res = await fetch('https://api.github.com/graphql', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
               Authorization: `bearer ${token}`,
            },
            body: JSON.stringify({ query }),
         })

         const data = await res.json()

         return data.data?.user?.contributionsCollection?.contributionCalendar?.totalContributions || 0
      } catch (error) {
         console.error('Error fetching GitHub contributions:', error)
         return 0
      }
   },
   async getGitHubStars(): Promise<number> {
      try {
         const query = `
    {
      user(login: "${username}") {
        repositories(first: 100, ownerAffiliations: OWNER, isFork: false) {
          nodes {
            stargazerCount
          }
        }
      }
    }
  `

         const res = await fetch('https://api.github.com/graphql', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
               Authorization: `bearer ${token}`,
            },
            body: JSON.stringify({ query }),
         })

         const json = await res.json()

         const stars =
            json.data?.user?.repositories?.nodes?.reduce(
               (acc: number, repo: { stargazerCount: number }) => acc + repo.stargazerCount,
               0
            ) || 0

         return stars
      } catch (error) {
         console.error('Error fetching GitHub stars:', error)
         return 0
      }
   },
}
