import { create } from 'zustand'

type ContactFormStore = {
   isLoading: boolean
   setLoading: (isLoading: boolean) => void
}

export const useContactFormStore = create<ContactFormStore>((set) => ({
   isLoading: false,
   setLoading: (isLoading: boolean) => set((state) => ({ ...state, isLoading })),
}))
