'use client'
import useMenuModal from '@/hooks/useMenuModal'
import Modal from './Modal'
import { useCallback } from 'react'

function MenuModal() {
    const menuModal = useMenuModal()

    const bodyContent = <></>
    const footerContent = <></>
    const handleSubmit = useCallback(() => {
        console.log(menuModal)
    }, [menuModal])

    return (
        <Modal
            isOpen={menuModal.isOpen}
            onClose={menuModal.onClose}
            onSubmit={handleSubmit}
            actionLabel=""
        />
    )
}

export default MenuModal
