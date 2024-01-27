import { VerifiedUser } from '@prisma/client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Verified from './Verified'
import Unverified from './Unverified'
import { RedirectToSignIn, redirectToSignIn } from '@clerk/nextjs'
import { PuffLoader } from 'react-spinners'



const IdentificationView = () => {

    const [userVerification, setUserVerification] = useState({
      isExist: false,
      verificationStatus: "" 
    })

    const [mounted, setMounted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
  

useEffect(() => {

    const fetchUser = async() => {
        try{
          setIsLoading(true)
         const {data} = await axios.get("/api/fetchVerifiedUser")
         console.log(data) 
         setUserVerification(data)
        } catch(e){
console.log(e)
        } finally{
setMounted(true)
setIsLoading(false)
        }
    }
    fetchUser()
}, [])

if(!mounted) {
  return null
}
if(!userVerification.isExist) {
  redirectToSignIn("/")
}


  return (
<>
{ isLoading ? <PuffLoader size={100}/> : <div>
  {userVerification.verificationStatus !== "INCOMPLETE" ? 
    
      userVerification.verificationStatus === "PENDING" ? (<>
      Verification Pending
      </>) : (
      <>
     <Verified/>
      </>
      )

    
  : (
    <>
    <Unverified/>
    </>
  )}

    </div>}
</>

   
  )
}

export default IdentificationView