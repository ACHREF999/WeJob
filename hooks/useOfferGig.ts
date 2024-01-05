import useSWR from 'swr'
import fetcher from '@/libs/fetcher'

const useOfferGig = (gigId: string) => {
    const { data, error, isLoading, mutate } = useSWR(
        gigId ? `/api/offers/gig/${gigId}` : null,
        fetcher
    )
    return {
        data,
        error,
        isLoading,
        mutate,
    }
}

export default useOfferGig
