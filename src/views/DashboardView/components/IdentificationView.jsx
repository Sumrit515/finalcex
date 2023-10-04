import { VerifiedUser } from '@prisma/client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Verified from './Verified'
import Unverified from './Unverified'



const IdentificationView = () => {

    const [userVerification, setUserVerification] = useState({
      isExist: false,
      verificationStatus: "" 
    })

    const [mounted, setMounted] = useState(false)
   

useEffect(() => {

    const fetchUser = async() => {
        try{
         const {data} = await axios.get("/api/fetchVerifiedUser")
         console.log(data) 
         setUserVerification(data)
        } catch(e){
console.log(e)
        } finally{
setMounted(true)
        }
    }
    fetchUser()
}, [])

if(!mounted) {
  return null
}


  return (

    <div>
  {userVerification.isExist ? 
    
    
      userVerification.verificationStatus === "pending" ? (<>
      Verification Pending
      </>) : (<>
     <Verified/>
      </>)

    
  : (
    <>
    <Unverified/>
    </>
  )}

    </div>
  )
}

export default IdentificationView