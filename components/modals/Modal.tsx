import { IoClose } from 'react-icons/io5'
import {useCallback} from 'react'


interface ModalProps {
    isOpen?: boolean
    onClose: () => void
    onSubmit: () => void
    title?: string
    body?: React.ReactElement
    footer?: React.ReactElement
    actionLabel: string
    disabled?: boolean
}

function Modal({
    isOpen,
    onClose,
    onSubmit,
    title,
    body,
    footer,
    actionLabel,
    disabled,
}: ModalProps) {

  const handleClose = useCallback(()=>{
    if(disabled) return 
    onClose();
  },[disabled,onClose])

  const handleClick = useCallback(()=>{
    if(disabled) return 
    onSubmit()
  },[disabled,onSubmit])
    return (isOpen&&(
        <div
            className={`${
                isOpen ? ' ' : ' hidden '
            } fixed inset-0 bg-gradient-to-r from-[#740B9911] to-[#740B9902] z-[51] backdrop-blur-[2px] flex justify-center items-center`}
            onClick={onClose}
        >
            {/* Content */}
            <div
                className="relative h-[80%] bg-white shadow-md rounded-md w-full md:w-[80%] lg:w-[65%] xl:w-[55%] flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header  */}
                <div className="flex flex-row pt-2 pb-8 px-[5%] mt-6 justify-between items-center border-b-blue-300 border-opacity-30 border-b-[1px]">
                    <span className="text-2xl lg:text-3xl font-semibold ">
                        {title}
                    </span>
                    <button className="" onClick={handleClose}>
                        <IoClose size={32} />
                    </button>
                </div>
                {/* End Of Header */}

                {/* Body */}
                <div className="p-2 px-[5%] ">{body}</div>
                <div className="absolute bottom-0 inset-x-0 p-2 px-[5%] flex flex-col gap-4 mb-6">
                    <button
                        className="bg-[#2594FA] w-[100%] self-center p-2 rounded-2xl text-white text-xl  font-semibold hover:opacity-95 transition-all"
                        onClick={handleClick}
                    >
                        {actionLabel}
                    </button>
                    {/* Footer */}
                    <div className=" self-center">{footer}</div>
                </div>
            </div>
        </div>
    ))
}

export default Modal
