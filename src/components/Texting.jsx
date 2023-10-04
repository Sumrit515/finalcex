import React from 'react'
import useScreenWidth from '../hooks/useScreenWidth'

const Texting = () => {

   const mobileWidth = 500;
   const currentWidth = useScreenWidth()
   console.log(currentWidth) 
 
  return (
    <div>Texting</div>
  )
}

export default Texting