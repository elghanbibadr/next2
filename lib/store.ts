import { create } from 'zustand'

export const useStore = create((set) => ({
  open: true,
  setIsOpen: () => set(() => ({ open:false })),
  
}))