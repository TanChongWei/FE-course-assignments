import React from 'react'

export default function FormSelectInput (props) {
  return (
    <div className="lg:grid lg:grid-cols-3 lg:gap-4 lg:items-start">
      {props.title}
      <select
        value={props.state}
        onChange={(ev) => props.setState(ev.target.value)}
        required
        className="block
				w-full
				shadow-sm
				sm:text-sm
				focus:ring-pink-500 focus:border-pink-500
				border-gray-300
				rounded-md
				border-2
				rounded-sm">
        {props.options.map((option) => {
          return <option key={option}value={option}>{option}</option>
        })}
      </select>
    </div>
  )
}
