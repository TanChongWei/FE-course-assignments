import React from 'react'

export const FormTextInput = (props) => {
  return (
    <div>
      {props.title}
      <input
        type={props.type}
        onChange={(ev) => props.setState(ev.target.value)}
        name={props.title}
        id={props.title}
        autoFocus={props.autoFocus}
        required
      ></input>
    </div>
  )
}