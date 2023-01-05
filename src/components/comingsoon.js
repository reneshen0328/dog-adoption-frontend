/* eslint-disable*/
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react'
import { useNavigate } from 'react-router-dom';

const ComingSoon = () => {
  const nevigate = useNavigate()

  const handleSubmit = event => {
    event.preventDefault();
    nevigate('/dog-adoption-frontend')
  }

  return (
    <div id="coming-soon-container">
      <h1 id="coming-soon-header">Coming Soon</h1>
      <svg height="10" width="220" id="coming-soon-underline">
        <path stroke="#004A44" strokeWidth={10} d="M5 0 2000 0" />
      </svg>
      <h3 id="coming-soon-subtext">
        From lonely to loved. Help the dogs in need anywhere at anytime.
      </h3>
      <form onSubmit={handleSubmit} id="coming-soon-form">
        <input
          required
          type="text"
          name="name"
          placeholder="Enter your email"
          id="coming-soon-input"
        />
        <input type="submit" value="Submit" id="coming-soon-button" />
      </form>
    </div>
  )
}

export default ComingSoon
