'use client'

import { useEffect } from 'react'

export const AppScript = () => {
   useEffect(() => {
      const _iub = window._iub || []
      _iub.csConfiguration = { siteId: 3889844, cookiePolicyId: 68111717, lang: 'en', storage: { useSiteId: true } }
   }, [])

   return null
}
