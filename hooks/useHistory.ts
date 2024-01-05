'use client'
import useSWR from 'swr'
import fetcher from '@/libs/fetcher'

const Gigs = (userId: string) => {
    const { data, error, isLoading, mutate } = useSWR(
        userId ? `/api/gigs/user/${userId}` : null,
        fetcher
    )
    return {
        data,
        error,
        isLoading,
        mutate,
    }
}

const Jobs = (userId: string) => {
    const { data, error, isLoading, mutate } = useSWR(
        userId ? `/api/jobs/user/${userId}` : null,
        fetcher
    )
    return {
        data,
        error,
        isLoading,
        mutate,
    }
}

// for the freelancer
const JobsContracts = () => {
    const { data, error, isLoading, mutate } = useSWR(
        `/api/jobs/contracts/`,
        fetcher
    )
    return {
        data,
        error,
        isLoading,
        mutate,
    }
}

const Proposals = (userId: string) => {
    const { data, error, isLoading, mutate } = useSWR(
        userId ? `/api/proposals/user/${userId}` : null
    )
    return {
        data,
        error,
        isLoading,
        mutate,
    }
}

const Offers = (userId: string) => {
    const { data, error, isLoading, mutate } = useSWR(
        userId ? `/api/offers/user/${userId}` : null,
        fetcher
    )
    return {
        data,
        error,
        isLoading,
        mutate,
    }
}

const FavoriteJobs = () => {
    const { data, error, isLoading, mutate } = useSWR(
        `/api/jobs/favorites/`,
        fetcher
    )
    return {
        data,
        error,
        isLoading,
        mutate,
    }
}
const FavoriteGigs = () => {
    const { data, error, isLoading, mutate } = useSWR(
        `/api/gigs/favorites/`,
        fetcher
    )
    return {
        data,
        error,
        isLoading,
        mutate,
    }
}

//for the client
const GigsContracts = () => {
    const { data, error, isLoading, mutate } = useSWR(
        `/api/gigs/contracts/`,
        fetcher
    )
    return {
        data,
        error,
        isLoading,
        mutate,
    }
}

export default function useHistory(action: string, userId: string) {
    switch (action) {
        case 'jobs':
            return Jobs(userId)
        case 'gigs':
            return Gigs(userId)
        case 'proposals':
            return Proposals(userId)
        case 'offers':
            return Offers(userId)
        case 'favorite-jobs':
            return FavoriteJobs()
        case 'favorite-gigs':
            return FavoriteGigs()
        case 'active-jobs':
            return JobsContracts()
        case 'active-gigs':
            return GigsContracts()

        default:
            break
    }
}
