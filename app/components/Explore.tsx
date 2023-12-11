'use client'
import Image from 'next/image'
import useLoginModal from '@/hooks/useLoginModal'

function Explore() {
    const loginModal = useLoginModal()
  return (
      <div className="w-[90%] lg:h-[30vh] flex flex-row max-md:flex-wrap justify-between m-[5%] mt-0 px-4 rounded-xl items-center bg-gradient-to-tl from-[#A044E9] to-[#A300F0] py-4 px-6 ">
          {/* left Hand Side */}
          <div className="flex flex-col items-start text-white gap-8 w-[60%]">
              <h1 className="font-semibold text-xl lg:text-2xl">Explore New Jobs Now</h1>
              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti labore eaque omnis, quaerat tempore ducimus atque,
                  laboriosam voluptate inventore aliquam ipsa distinctio saepe
                  sint eligendi nostrum laborum accusamus mollitia quibusdam
                  veritatis ex magnam alias numquam consequatur perspiciatis.
                  Esse ex voluptates nulla debitis doloribus ipsa distinctio aut
              </p>

              <button
                  onClick={loginModal.onOpen}
                  className="bg-white text-[#A300F0] font-semibold py-2 px-6 rounded-xl"
              >
                  Get Started
              </button>
          </div>

          <div className="w-[40%] h-full  relative">
              <Image
                  src={'/images/ExploreImage.png'}
                  fill
                  style={{
                    objectFit:"fill"
                  }}
                  alt="Explore"
                //   className="relative inset-0 my-4"
              />
          </div>

      </div>
  )
}

export default Explore