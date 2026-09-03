import { useCallback, useSyncExternalStore } from 'react'

/**
 * Subscribes to a CSS media query. Returns `false` during SSR and hydration,
 * then the real match once the browser value is read (no setState-in-effect).
 */
export const useMediaQuery = (query: string) => {
   const subscribe = useCallback(
      (onStoreChange: () => void) => {
         const mql = window.matchMedia(query)
         mql.addEventListener('change', onStoreChange)
         return () => mql.removeEventListener('change', onStoreChange)
      },
      [query],
   )

   const getSnapshot = () => window.matchMedia(query).matches
   const getServerSnapshot = () => false

   return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
