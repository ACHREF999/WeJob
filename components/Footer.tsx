import {
    FaSquareXTwitter,
    FaSquareInstagram,
    FaSquareFacebook,
    FaLinkedin,
} from 'react-icons/fa6'

function Footer() {
    return (
        <div className="flex flex-col  px-[5%]  pb-6 gap-4 mt-24">
            {/* SiteMap Section */}
            <div className="flex flex-col md:flex-row justify-between ">
                <img
                src="/images/logo.png"
                className="w-fit h-fit"
                />
                <div className="flex flex-col gap-4">
                    <h1>First Column</h1>
                    <p>First Page</p>
                    <p>Second Page</p>
                    <p>Third Page</p>
                    <p>Fourth</p>
                </div>
                <div className="flex flex-col gap-4">
                    <h1>Second Column</h1>
                    <p>First Page</p>
                    <p>Second Page</p>
                    <p>Third Page</p>
                    <p>Fourth</p>
                </div>
                <div className="flex flex-col gap-4">
                    <h1>Third Column</h1>
                    <p>First Page</p>
                    <p>Second Page</p>
                    <p>Third Page</p>
                    <p>Fourth</p>
                </div>
            </div>

            {/* CopyRights Section */}
            <div className="flex flex-row justify-between items-center pt-4  text-[#8A5252] border-t-[1px] border-t-[#8A5252]">
                <div className="flex flex-row gap-3">
                    <span>2023 WEEJOB. All rights reserved</span>
                    <span>Privacy Policy</span>
                    <span>Terms Of Service</span>
                </div>
                <div className="flex flex-row gap-4 items-center">
                    <FaSquareXTwitter size={24} className=" text-[#0146B1] bg-gray-200 hover:bg-white"/>
                    <FaSquareInstagram size={24} className=" text-[#0146B1] bg-gray-200 hover:bg-white"/>
                    <FaSquareFacebook size={24} className=" text-[#0146B1] bg-gray-200 hover:bg-white"/>
                    <FaLinkedin size={24} className=" text-[#0146B1] bg-gray-200 hover:bg-white"/>
                </div>
            </div>
        </div>
    )
}

export default Footer
