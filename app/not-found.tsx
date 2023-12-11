'use client'
import { useRouter } from "next/navigation"


function Custom404() {
    const router = useRouter()
    return (
        <>
            <div>It seems you have wondered Far away , wanna go back?</div>
            <button
                className="px-6 py-2 text-white font-semibold text-xl bg-[#8301B1]"
                onClick={(e) => {
                    router.back()
                }}
            >
                Go back!
            </button>
        </>
    )
}

export default Custom404