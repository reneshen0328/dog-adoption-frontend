/* eslint-disable react/prop-types */
/* eslint-disable*/
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react'
import { Route } from 'react-router-dom'
import { withAuthenticationRequired } from '@auth0/auth0-react'

// import Loading from '../components/layout/Loading.js'

import Homepage from '../components/homepage.js'
import AdoptNow from '../components/adoptnow.js'

const ProtectedRoute = ({ component, ...args }) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => <AdoptNow />
    })}
    {...args}
  />
)

export default ProtectedRoute
