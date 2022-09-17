import React, { useEffect } from 'react'

const receiveMessage = (message) => {
  let msg = '';
  const res = Json.parse(message.data);
  const texts = {};
  texts[res.audio_start] = res.text;
  const keys = Object.keys(texts).sort((a, b) => a - b);
  keys.forEach((key) => {
    if(texts[key]) msg += ` ${texts[key]}`;
  });

}

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