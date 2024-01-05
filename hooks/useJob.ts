'use client'
import useSWR from 'swr'
import fetcher from '@/libs/fetcher'

export default function useJob(jobId: string) {
    const { data, error, isLoading, mutate } = useSWR(
        jobId ? `/api/jobs/${jobId}` : null,
        fetcher
    )
    return {
        data,
        error,
        isLoading,
        mutate,
    }
}
