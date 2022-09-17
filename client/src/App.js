import React from 'react'

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
  return (
    <div>App</div>
  )
}

export default App