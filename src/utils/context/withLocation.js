import React from 'react'
import { Location } from "@reach/router"

const withLocation = Component => props => (
  <Location>
    {({ location }) => <Component {...props} location={location}/>}
  </Location>
)

export default withLocation
