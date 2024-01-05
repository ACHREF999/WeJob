'use client'
// import useRegisterModal from '@/hooks/useRegisterModal'

import Modal from './Modal'
import { useCallback, useState,useEffect } from 'react'
import Input from '@/components/Input'
// import {signIn} from 'next-auth/react'
import  useEditModal  from '@/hooks/useEditModal';
import useUser from '@/hooks/useUser';
import Image from 'next/image'
import { UploadDropzone } from '@/libs/uploadthing';
import toast from 'react-hot-toast'
import axios from 'axios'
import { useRouter } from 'next/navigation';

function EditModal() {
    const router = useRouter()
    const editModal = useEditModal()
    // const registerModal = useRegisterModal()
    const {data:user,isLoading:userIsLoading,error} = useUser(editModal.userId)
    const [firstName,setFirstName] = useState(user?.data.firstName||'')
    const [lastName,setLastName] = useState(user?.data.lastName||'')
    const [githubLink,setGithubLink] = useState(user?.data.githubLink||null)
    const [linkedinLink,setLinkedinLink] = useState(user?.data.linkedinLink||null)
    const [description,setDescription] = useState(user?.data.description||null)
    const [image,setImage] = useState(user?.data.image||null)
    
    const [isLoading, setIsLoading] = useState(false)
    useEffect(()=>{
        setFirstName(user?.data.firstName||'')
        setLastName(user?.data.lastName||'')
    },[user])
    // const onToggle = useCallback(() => {
    //     if (isLoading) return
    //     registerModal.onOpen()
    //     return
    // }, [])
    const DiscardImage = async (e:any) => {
    console.log('delete files')
    let value = image
    setImage('')
    try{

        const res = await axios.delete('/api/uploadthing',{
        data:{
            url:value
        }
    })
    console.log(res)

    toast.success('Deleted Image Successfully')    
}
    catch{
        toast.error('Failed To delete the image')
        
    }
    }

    const validateInput = ()=>{
        if(firstName.length<3 || lastName.length<3 ){
            return false
        }
        return true   
    }
    


    const bodyContent = (
        <div className="flex flex-col gap-4 mt-10">
            
            <h1 className="pl-2 text-gray-400 font-medium">
                Customize your profile
            </h1>

            <div className="flex flex-row gap-8">
                <Input
                    type="text"
                    disabled={isLoading}
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) =>
                        setFirstName(e.target.value)
                    }
                />
                <Input
                    type="text"
                    disabled={isLoading}
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) =>
                        setLastName(e.target.value)
                    }
                />
            </div>
            <textarea
                rows={4}
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="outline-none bg-gray-50/20 border-gray-300 border-[1px]  w-full p-2 rounded-lg resize-none"
                placeholder="Enter Description ..."
            />
            <div className="flex flex-row gap-8">

            <Input
                type="text"
                disabled={isLoading}
                placeholder="Github Link"
                value={githubLink}
                onChange={(e) => setGithubLink(e.target.value)}
            />


            <Input
                type="text"
                disabled={isLoading}
                placeholder="Linkedin Link"
                value={linkedinLink}
                onChange={(e) => setLinkedinLink(e.target.value)}
            />
            </div>
            {(image) && (<button
                        onClick={DiscardImage}
                        className="text-lg font-medium flex flex-row gap-4 items-center justify-center w-[25%] border-[1px] border-[#740B99] text-[#740B99] rounded-full py-2"
                    >discard Image </button>)}
                {image ? (
                    <div className="w-full relative h-[45vh] mb-[7rem]">
                        <Image
                            src={image}
                            alt="uploaded image"
                            fill
                            objectFit="contain"
                        />
                    </div>
                ) : (
                    <UploadDropzone
                        className="w-full mb-[7rem]"
                        endpoint="imageUploader"
                        onClientUploadComplete={(res) => {
                            // Do something with the response

                            console.log('Files: ', res)
                            setImage(res?.[0].url)
                            toast.success('Image Uploaded!')
                        }}
                        onUploadError={(error: Error) => {
                            // Do something with the error.
                            toast.error(`ERROR uploading image! ${error.message}`)
                        }}
                    />
                )}
            </div>

    )
    const footerContent = (
        <div>
            
        </div>
    )
    const handleSubmit = async () => {
        setIsLoading(true)
        if(!validateInput()){
            toast.error('Please Fill Fields Correctly')
            toast.error('First and Last Name are required fields')
            
        }
        else{
            const {data:newUser} = await axios.put(`/api/users/${editModal.userId}`, {
                firstName,
                lastName,
                image,
                description,
                githubLink,
                linkedinLink,
            })
            console.log('Updated User : ',newUser)
            if(newUser ){
                toast.success('UpdatedSuccessfully')
                
                editModal.onClose()
                router.refresh()
            }else{
                toast.error('Failed To Update')
            }
            setIsLoading(false)
        }
      }

    return (
        <Modal
            isOpen={editModal.isOpen}
            onClose={editModal.onClose}
            onSubmit={handleSubmit}
            actionLabel="Update Profile"
            title="Update"
            footer={footerContent}
            body={bodyContent}
            disabled={isLoading}
        />
    )
}

export default EditModal
