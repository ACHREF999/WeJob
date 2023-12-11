import Image from 'next/image'
import PopularCard from './PopularCard'
import { FaMedal } from "react-icons/fa6";
import { GiWallet } from "react-icons/gi";
import { RiCustomerServiceFill } from 'react-icons/ri'



function Popular() {
  return (
      <div className="flex flex-row justify-between w-full px-[5%] my-16 items-center">
          {/* Content */}
          <div className="w-1/2 text-lg">
              <h1 className="text-2xl lg:text-4xl font-semibold my-6 flex flex-col items-start">
                  Why We are Most <span className="text-blue-600">Popular</span>
              </h1>
              <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
                  sapiente cumque recusandae eius suscipit sed totam voluptatum
                  provident excepturi ipsa? Id in nisi magnam. <br />
                  Nam, eligendi laudantium tempora in animi cumque quaerat
                  perferendis voluptates expedita quisquam numquam voluptate a
                  nihil cupiditate, iusto eaque sit?{' '}
              </p>
              <div className="flex flex-col items-start mt-6 gap-4">
                  <div className="flex flex-col xl:flex-row items-center gap-6">
                      <PopularCard Icon={FaMedal} title="Quality Assessment" />
                      <PopularCard Icon={GiWallet} title="No Extra Charges" />
                  </div>

                  <div className="flex flex-col xl:flex-row  items-center gap-6">
                      <PopularCard
                          Icon={RiCustomerServiceFill}
                          title="Best Customer Service"
                      />
                      <PopularCard Icon={RiCustomerServiceFill} title="jajaja" />
                  </div>
              </div>
          </div>

          {/* Image */}
          <div className="relative w-[40%] h-[480px]">
              <Image
                  src="/images/PopularSection.png"
                  alt="Popular"
                  fill
                  style={{
                      objectFit: 'fill',
                  }}
              />
          </div>
      </div>
  )
}

export default Popular