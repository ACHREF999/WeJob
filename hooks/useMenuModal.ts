import { create } from 'zustand'

interface MenuStore {
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
}

const useMenuModal = create<MenuStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}))

export default useMenuModal
