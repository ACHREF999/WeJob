import {create} from 'zustand'

interface ProposalStore {
    isOpen:boolean;
    // jobId:string;
    onOpen:(jobId:string)=>void;
    onClose:()=>void;
    jobId:string;
}


const useProposalModal = create<ProposalStore>((set)=>({
    isOpen:false,
    jobId:'',
    onOpen:(jobId)=>(set({isOpen:true,jobId:jobId})),
    onClose:()=>(set({isOpen:false})),
}))


export default useProposalModal;