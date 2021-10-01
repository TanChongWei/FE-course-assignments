import React from 'react'
import FormTitle from '../components/FormTitle'
import FormInput from '../components/FormInput'
import FormSelectInput from '../components/FormSelectInput'
import Button from '../components/Button'

export default function CareersForm (props) {
  const [jobTitle, setJobTitle] = React.useState('')
  const [level, setLevel] = React.useState('internship')
  const [department, setDepartment] = React.useState('')
  const [summary, setSummary] = React.useState('')
  const [headcount, setHeadcount] = React.useState(1)
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  return (
    <div className="md:w-1/2">
      <form
        onSubmit={ev => {
          ev.preventDefault()
          setIsSubmitting(true)
          const newJob = { jobTitle, level, department, summary, headcount }
          props.onSubmit(newJob)
          console.log('submitted')
          setJobTitle('')
          setLevel('internship')
          setSummary('')
          setHeadcount(1)
          setDepartment('')
          setIsSubmitting(false)
        }}
      >
        <div className="bg-white
                  overflow-hidden
                  shadow
                  rounded-lg
                  divide-y divide-gray-200">
          <FormTitle title="Add Job Posting"/>
          <div className="px-4 py-5 sm:p-6">
            <div className="space-y-5">
              <FormInput type="text" title="Job Title" state={jobTitle} setState={setJobTitle} />
              <FormInput type ="text" title="Department" state={department} setState={setDepartment}/>
              <FormInput type="text" title="Summary" state={summary} setState={setSummary}/>
              <FormSelectInput title="level" state={level} setState={setLevel} options={["internship", 'entry', 'experienced', 'manager']}/>
              <FormInput type="number" title="Headcount" state={headcount} setState={setHeadcount}/>
            </div>
          </div>
        </div>
        <Button disabled={isSubmitting}/>
      </form>
    </div>
  )
}
