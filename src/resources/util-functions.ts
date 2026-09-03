export const isCurrentPath = (currentPath: string, url: string, isDefaultLocale: boolean, position?: number) => {
   const index = position || 1
   const substringPath = currentPath.substring(3)
   const newCurrentPath = isDefaultLocale ? currentPath : substringPath.length === 0 ? '/' : substringPath
   const path = newCurrentPath.split('/')[index]
   return path === url.split('/')[index]
}
