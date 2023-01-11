import React, { useEffect, useState } from 'react'

function Token () {
  const [token, setToken] = useState('')
  useEffect(() => {
    // storing input name
    localStorage.setItem('name', JSON.stringify(token))
  }, [token])
}

export default Token
