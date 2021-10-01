import React from 'react'

export default function FormTextInput (props) {
  return (
    <div className="lg:grid lg:grid-cols-3 lg:gap-4 lg:items-start">
      {props.title}
      <input className="block
                            w-full
                            shadow-sm
                            sm:text-sm
                            focus:ring-pink-500 focus:border-pink-500
                            border-gray-300
                            rounded-md
														border-2
														rounded-sm"
      type={props.type} value={props.state} onChange={(ev) => props.setState(ev.target.value)} required></input>
    </div>
  )
}
