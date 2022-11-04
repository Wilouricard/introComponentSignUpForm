import React from 'react'
import Text from './components/Text'
import Trybox from './components/Trybox'
import Form from './components/Form'

function App() {

  return (
    <main className='min-h-screen bg-red px-12 pt-16 leading-7'>
      {/* <img src="public\images\bg-intro-mobile.png" alt="" className='absolute object-cover'/> */}
      <Text />
      <Trybox />
      <Form />
    </main>
  )
}

export default App
