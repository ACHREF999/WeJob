import Stats from "./Stats"
import History from './History';


type Props = {
    userId:string
    currentUser:any
}

const ProfileBody = ({userId,currentUser}: Props) => {
    
    return (
    <div className="w-[70%] border-gray-200 border-[2px] rounded-xl shadow-sm h-full flex flex-col gap-6 p-4 lg:p-6">
        <Stats userId={userId} currentUser={currentUser}/>
        <History userId={userId} currentUser={currentUser}/>
    </div>
  )
}

export default ProfileBody