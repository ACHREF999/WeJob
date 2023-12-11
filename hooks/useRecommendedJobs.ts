import React from 'react'

async function useRecommendedJobs() {
    const res = await fetch('http:localhost:3001/',{method:'GET'})
    const jobs = await res.json()

    return jobs

}

export default useRecommendedJobs