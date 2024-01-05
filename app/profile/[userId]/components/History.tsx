'use client'
import {useState,useEffect,useRef} from 'react'
import useUser from '@/hooks/useUser'
import Loading from '@/components/LoadingComp';
import useHistory from '@/hooks/useHistory';

type Props = {
    userId:string
    currentUser:any
}

// }['Gigs','Proposals','Saved jobs']['Jobs','Offers','Saved Gigs']
let actions:{[key:string]:any} = {
    'Gigs':'gigs',
    'Proposals':'proposals',
    'Active Job Contracts':'active-jobs',
    'Saved Jobs':'favorite-jobs',
    'Jobs':'jobs',
    'Offers':'offers',
    'Active Gig Contracts':'active-gigs',
    'Saved Gigs':'favorite-gigs'
}

const History = ({userId,currentUser}: Props) => {
    const {data:visitedUser,error,isLoading,mutate} = useUser(userId)

    const [tabs,setTabs] = useState<string[]>([])
    const [activeTab,setActiveTab] = useState('Gigs')
    
    const {data:HistoryData,error:HistoryError,isLoading:HistoryIsLoading,mutate:HistoryMutate} = useHistory(actions[activeTab],userId)||{}
    
    if (error) throw new Error('failed to fetch the user '+userId)
    if(HistoryError) throw new Error('Failed To Fetch History')


    useEffect(()=>{
        if(visitedUser?.data.role=="FREELANCER"){
            if(userId == currentUser?.userId) {
                setTabs(['Gigs','Proposals','Active Job Contracts','Saved Jobs'])
            }
            else{
                setTabs(['Gigs'])
            }
            setActiveTab('Gigs')
        }
        else if(visitedUser?.data.role =='CLIENT'){
            if (userId==currentUser.userId){
                setTabs(['Jobs','Offers','Active Gig Contracts','Saved Gigs'])
            }
            else{
                setTabs(['Jobs'])
            }
            setActiveTab('Jobs')
        }
        console.log('currentUser:',currentUser)
    },[visitedUser,userId,currentUser,isLoading])
    // if a freelancer
    // Gigs,saved Jobs , Offers | Gigs
    // elif a client
    // Jobs,Saved Gigs, proposals | Jobs
    // console.log(userId + "||" + currentUser)
    if (userId===currentUser?.userId ){
        
    }
    const handleClick = (item:string)=>{
        setActiveTab(item)
    }
    
    return (
        <div>
            <h1 className="text-2xl font-semibold">History</h1>
            {isLoading || HistoryIsLoading ? (
                <Loading />
            ) : (
                <div>
                    {/* NavMenu */}
                    <div className="w-full rounded-t-xl bg-gray-100/30 border-gray-100 border-[2px] my-4">
                        {tabs.map((item: any, idx) => (
                            <button
                                className={`py-2 px-6 ${
                                    idx == 0 ? ' rounded-tl-xl ' : ' '
                                }  mr-0  ${
                                    item == activeTab
                                        ? 'text-purple-600 bg-white border-b-purple-600 border-b-[2px]'
                                        : 'text-purple-400'
                                }  font-bold`}
                                key={item}
                                onClick={() => handleClick(item)}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                    <div></div>

                    {/* Content */}
                    <div>
                        {HistoryData?.data.length > 0 ? (
                            HistoryData?.data.map((item: any) => item.title)
                        ) : (
                            <h1>Not Found Items</h1>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default History