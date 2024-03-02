import React, { useEffect, useState } from 'react'
import { formatDate } from '../hooks/useHelper'

const FormatDateRender = (data) => {
    
    const [dateString, setDateString] = useState("")

    useEffect(() => {
       
        if(data) 
        setDateString(formatDate(data))

    }, [data])

  return (
    <div>{dateString}</div>
  )
}

export default FormatDateRender