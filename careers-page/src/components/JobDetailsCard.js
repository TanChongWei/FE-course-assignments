import React from 'react';

export default function JobDetailsCard(props) {
  return (
    <div className="flex flex-col px-4 py-4 sm:px-6 w-11/12">
      <div className="min-w-0 text-sm leading-5 font-medium text-pink-600 truncate">
        {props.jobTitle} <span className="ml-1 font-normal text-gray-500">in {props.department}</span>
      </div>
      <div className="flex items-center gap-2 text-sm leading-5 text-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400">
          <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"></path>
          <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path></svg><span>{props.level}</span>
      </div>
    </div>
  )
}