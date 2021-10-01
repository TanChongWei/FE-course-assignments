import React from 'react'

export default function Button (props) {
  return (
    <div className="px-4 py-4 sm:px-6 text-center">
      <button className="inline-flex
                      justify-center
                      py-2
                      px-4
                      border border-transparent
                      shadow-sm
                      text-sm
                      font-medium
                      rounded-md
                      text-white
                      bg-pink-600
                      hover:bg-pink-700
                      focus:outline-none
                      focus:ring-2
                      focus:ring-offset-2
                      focus:ring-pink-500"
      type="submit" disabled={props.disabled}>Submit</button>
    </div>
  )
}
