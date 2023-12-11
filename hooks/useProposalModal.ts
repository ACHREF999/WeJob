import {create} from 'zustand'

interface ProposalStore {
    isOpen:boolean;
    jobId:string;
    onOpen:(id:string)=>void;
    onClose:()=>void;
}


const useProposalModal = create<ProposalStore>((set)=>({
    isOpen:false,
    jobId:'',
    onOpen:(id:string)=>(set({isOpen:true,jobId:id})),
    onClose:()=>(set({isOpen:false})),
}))


export default useProposalModal;