import React, { useState } from 'react'
import App from './App'

const useScroll = () => {

    const [scrolled, setScrolled] = useState(false)

    const handleScroll = () => {
      if (window.scrollY > 90) {
        // console.log('handleScroll true')
        return setScrolled(true);
      }
      // console.log('handleScroll false')
      return setScrolled(false)
    }

  return (
    <div
        onTouchMove={() => {
          setTimeout(() => {handleScroll()}, 500);
        }}
        onWheel={() => {
          setTimeout(() => {handleScroll()}, 500)
        }}
    >
        <App  />
    </div>
  )
}

export default useScroll