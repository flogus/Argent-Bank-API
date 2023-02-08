import { useSelector } from 'react-redux'

import React from 'react'

const Userinfo = () => {
  const user = useSelector(state => state.user)

  return (
    <div>
      {user.firstName} {user.lastName}
    </div>
  )
}

export default Userinfo
export { Userinfo }
