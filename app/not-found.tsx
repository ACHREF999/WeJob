'use client'
import { useRouter } from "next/navigation"


function Custom404() {
    const router = useRouter()
    return (
        <div className="px-[5%] flex flex-col lg:flex-row gap-8 my-18 lg:my-24">
            <img
            src="/images/placeholder"
            className="w-[30%] pr-4 mx-12 border-r-[2px]"
            />
            <div className="flex flex-col gap-4 w-[40%]">
            <h1 className="text-2xl lg:text-3xl font-semibold">It seems you have wondered Far away , wanna go back?</h1>
            <button
                className="px-6 py-2 text-white font-semibold text-xl rounded-xl bg-[#8301B1]"
                onClick={(e) => {
                    router.back()
                }}
            >
                Go back!
            </button>
            </div>
        </div>
    )
}

export default Custom404