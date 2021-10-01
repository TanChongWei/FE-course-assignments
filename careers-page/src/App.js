import './public/App.css'
import CareersForm from './careerpage/CareersForm'
import Listings from './careerpage/Listings'
import React from 'react'
import Title from './components/Title'

function App () {
  const [jobs, setJobs] = React.useState([])
  return (
    <div className="App max-w-6xl mx-auto px-3 py-12 space-y-6">
      <Title text="Careers"/>
      <div className="flex flex-col md:flex-row gap-3">
        <CareersForm onSubmit={(newJob) => setJobs([...jobs, newJob])} />
        <Listings jobs={jobs} setJobs={setJobs}/> 
      </div>
    </div>
  )
}

export default App
