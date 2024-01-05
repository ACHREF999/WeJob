'use client'
import useSWR from 'swr'
import fetcher from '@/libs/fetcher'

export default function useJobs(query: string) {
    const { data, error, isLoading, mutate } = useSWR(
        `/api/gigs?${query}`,
        fetcher
    )
    return {
        data,
        error,
        isLoading,
        mutate,
    }
}
