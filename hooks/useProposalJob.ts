import useSWR from 'swr'
import fetcher from '@/libs/fetcher'


const useProposalJob = (jobId:string)=>{
    const {data,error,isLoading,mutate} = useSWR(jobId?`/api/proposals/job/${jobId}`:null,fetcher)
    return {
        data,error,isLoading , mutate
    }
}

export default useProposalJob;