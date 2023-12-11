
'use client'
import useProposalModal from '@/hooks/useProposalModal'
import Modal from './Modal'

function ProposalModal() {
    const proposalModal = useProposalModal()

    const bodyContent = (<div>hello</div>)
    const footerContent = (<div>hola</div>)
    const handleSubmit = ()=>{
        
    }

    return (
        <Modal
            isOpen={proposalModal.isOpen}
            onClose={proposalModal.onClose}
            onSubmit={handleSubmit}
            body={bodyContent}
            footer={footerContent}
            actionLabel="Submit"
        />
    )
}

export default ProposalModal
