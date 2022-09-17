import React, { useEffect } from 'react'

const App = () => {
  useEffect(() => {
    const test = async () => {
      console.log('bet')
      const response = await fetch('/');
      console.log(response)
      const data = await response.json()
      console.log(data)
    }
    test()

  }, [])
  return (
    <div>App</div>
  )
}

export default App