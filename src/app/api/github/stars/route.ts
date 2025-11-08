import { GithubService } from '@src/services/github.service'

export async function GET() {
   const stars = await GithubService.getGitHubStars()
   return Response.json({ stars })
}
