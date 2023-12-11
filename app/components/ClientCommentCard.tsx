
import Image from 'next/image';


interface ClientCommentCardProps {
    image?:string;
    comment:string;
    name:string;
    

}

function ClientCommentCard({
name,image,comment
}:ClientCommentCardProps) {
  return (
      <div className="bg-white border-[1px] border-gray-200 mr-8  shadow-sm flex flex-col items-center justify-between w-full max-w-[30vw] min-h-[30vh] ">
          <div className="rounded-full w-16 h-16 flex flex-col items-center   py-4">
              <Image
                  src={'/images/placeholder.png'}
                  width={160}
                  className="rounded-full "
                  height={160}
                  key={name}
                  alt={name}
                  style={{
                      objectFit: 'scale-down',
                  }}
              />
          </div>
          <p>{comment}</p>

          <div className="flex flex-col items-center">
              <div className="rounded-full min-w-16 bg-[#00A79D]"></div>
              <h3 className="text-lg lg:text-xl font-medium py-6"> {name} </h3>
          </div>
      </div>
  )
}

export default ClientCommentCard