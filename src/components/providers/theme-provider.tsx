'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ComponentProps } from 'react'

/**
 * next-themes injects a tiny inline script before hydration, so the right `.dark` class
 * is set on <html> at first paint: no flash, and no need to hide the page until mount.
 */
export function ThemeProvider({ children, ...props }: ComponentProps<typeof NextThemesProvider>) {
   return (
      <NextThemesProvider
         attribute='class'
         defaultTheme='system'
         enableSystem
         disableTransitionOnChange
         storageKey='ui-theme'
         {...props}
      >
         {children}
      </NextThemesProvider>
   )
}
