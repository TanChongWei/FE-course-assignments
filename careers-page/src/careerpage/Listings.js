import React from 'react';
import JobListing from './JobListings'

export default function Listings(props) {
  const {jobs, setJobs} = props
  return (
    <div className="md:flex-1 space-y-3">
      <ul>
        {jobs.map((j, i) => {
          return <JobListing job={j} delete={() => setJobs(jobs.filter((job, idx) => idx !== i))} />
        })}
      </ul>
    </div>
  )
}