'use client'
// import React from 'react'
import useSWR from 'swr'
import fetcher from '@/libs/fetcher'

function useRecommendedGigs() {
    const { data, error, isLoading, mutate } = useSWR(
        '/api/gigs/recommended/',
        fetcher
    )
    // const jobs = await res.json()
    return {
        data,
        error,
        isLoading,
        mutate,
    }
}

export default useRecommendedGigs
