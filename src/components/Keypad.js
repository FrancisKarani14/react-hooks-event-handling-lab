// Code Keypad Component Here
import React from 'react'
import EyesOnMe from './EyesOnMe'

export default function Keypad() {
    function onChange(event) {
        console.log("Entering password...");
        
        
    }
  return (
    <div>
      <input type='password'onChange={onChange} />
    </div>
  )
}

