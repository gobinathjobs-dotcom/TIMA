import { create } from 'zustand'

export const useStore = create((set) => ({
    dimension: 'manufacturing', // 'manufacturing' | 'digital'
    setDimension: (dim) => set({ dimension: dim }),

    isKronosActive: false,
    setKronosActive: (active) => set({ isKronosActive: active }),

    theme: 'dark', // 'dark' | 'light'
    toggleTheme: () => set((state) => ({ theme: state.theme === 'dark' ? 'light' : 'dark' })),
}))
