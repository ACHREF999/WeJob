import {create } from 'zustand'

interface EditStore {
    isOpen : boolean
    userId:string
    onOpen: (userId:string)=>void
    onClose:()=>void
}

const useEditModal = create<EditStore>((set)=>({
    isOpen:false,
    userId:'',
    onOpen:(userId)=>set({isOpen:true,userId:userId}),
    onClose:()=>set({isOpen:false})
}))

export default useEditModal;