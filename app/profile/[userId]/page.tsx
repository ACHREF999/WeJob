import serverAuth from '@/libs/serverAuth'
import { getServerSession } from 'next-auth';
import ProfileBody from './components/ProfileBody';
import ProfileCard from './components/ProfileCard';
import AuthProvider from '@/components/AuthProvider';
import {authOptions} from '@/libs/auth'

type Props = {
    params:{
        userId:string
    }
}

// the page would consist of a profile card and a body ; the body will have a active section and history sections


const Profile = async ({params}: Props) => {
    
    const session= await getServerSession(authOptions)
    let currentUser = session?.user;

    // if(session && session.user ){
    //     currentUser = session.user
    // }

    return (
        // <AuthProvider session={session || null}>
        <div className="flex flex-row justify-between mt-6 w-full  min-h-[50vh]"> 
            <ProfileBody userId={params.userId} currentUser={currentUser} />
            <ProfileCard userId={params.userId} currentUser={currentUser}/>
            {/* This is the profile page of {params.userId} */}
        </div>
        // </AuthProvider>
    )
}

export default Profile