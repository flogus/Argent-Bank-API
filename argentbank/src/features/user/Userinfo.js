import { useState } from 'react'
import { useSelector } from 'react-redux'

import React from 'react'

const Userinfo = () => {
  const user = useSelector(state => state.user)
  const [userFirstname, useUserFisrtname] = useState(user.firstName)
  console.log(userFirstname)

  return (
    <div>
      {user.firstName} {user.lastName}
    </div>
  )
}

export default Userinfo
export { Userinfo }
