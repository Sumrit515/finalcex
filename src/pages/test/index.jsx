"use client"

import React, { useEffect, useState } from 'react'
import { io } from 'socket.io-client'

const Test = () => {

    const [socket, setSocket]= useState()
    const [message, setMessage] = useState("first text")

    const handleSendMessage = () => {
        socket.emit("message", message)
    }
    
    useEffect(() => {
        const socket = io("http://localhost:3005")
        
        socket.on("message", (message) => {
            console.log(message)
        })
        
        setSocket(socket)
        
    }, [])

  return (
    <div onClick={handleSendMessage}>Test</div>
  )
}

export default Test