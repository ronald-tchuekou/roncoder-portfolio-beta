import { GithubService } from '@src/services/github.service'

export async function GET() {
   const contributions = await GithubService.getGitHubContributions()
   return Response.json({ contributions })
}
