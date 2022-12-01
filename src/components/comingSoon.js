/* eslint-disable*/
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react'

const ComingSoon = () => {
  return (
    <div id="coming-soon-container">
      <h1 id="coming-soon-header">Coming Soon</h1>
      <svg height="10" width="220" id="coming-soon-underline">
        <path stroke="#004A44" strokeWidth={10} d="M5 0 2000 0" />
      </svg>
      <h3 id="coming-soon-subtext">
        From lonely to loved. Help the dogs in need anywhere at anytime.
      </h3>
      <form id="coming-soon-form">
        <input
          type="text"
          name="name"
          defaultValue="Enter your email"
          id="coming-soon-input"
        />
        <input type="submit" value="Submit" id="coming-soon-button" />
      </form>
    </div>
  )
}

export default ComingSoon
