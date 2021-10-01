import React from 'react';

export default function Title(props) {
  return (
    <div className="text-6xl mb-4 font-extrabold">
      {props.text}
    </div>
  )
}