'use client'
import useSWR from 'swr'
import fetcher from '@/libs/fetcher'

export default function useGig(gigId: string) {
    const { data, error, isLoading, mutate } = useSWR(
        gigId ? `/api/gig/${gigId}` : null,
        fetcher
    )
    return {
        data,
        error,
        isLoading,
        mutate,
    }
}
