import {create} from 'zustand'

interface OfferStore {
    isOpen:boolean;
    // jobId:string;
    onOpen:(jobId:string)=>void;
    onClose:()=>void;
    gigId:string;
}


const useOfferModal = create<OfferStore>((set)=>({
    isOpen:false,
    gigId:'',
    onOpen:(gigId)=>(set({isOpen:true,gigId:gigId})),
    onClose:()=>(set({isOpen:false})),
}))


export default useOfferModal;