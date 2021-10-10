import React from 'react'

export default function Button(props) {
  return (
    <button type={props.type} disabled={props.disabled}>Login!</button>
  )
}