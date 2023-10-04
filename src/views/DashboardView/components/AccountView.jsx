import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import { clerkClient, useAuth, auth } from '@clerk/nextjs'
import axios from 'axios'
import { PuffLoader } from 'react-spinners'

const AccountView = () => {

  const [profileSrc, setProfileSrc] = useState()
  const { userId } = useAuth() ;
  const [ user, setUser] = useState({
    address:"",
    documentType:"",
    documentUrl:"",
    email:"",
    fullName:"",
    id:"",
    isVerified:false,
    passportPicture:"",
    phoneNumber:"",
    profilePicture:"",
    upiId:"",
    userId:"",
    userName:"",
    verifcationStatus:''

  })

  const [isLoading, setIsLoading] = useState(true)

  const fetchUser = async () => {
   try{
       setIsLoading(true)
  
       const {data} = await axios.get(`/api/fetchVerifiedUser`)
       console.log(data)
       setUser(data)
  
 
   } catch(e){
     console.log(e)
   }
   finally{
    setIsLoading(false)
   }
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <div className='
   h-full
   w-full

    '>
      <div className='
       font-semibold
       mt-4
      '>
      My Account
      </div>
     
     { isLoading &&
     
     <PuffLoader
     size={100}
     />
     }

     { !isLoading && (
     <>
     <div className='
      flex
      mt-6
      justify-start
      flex-col
      gap-4
      '>
      <div className='
      w-100
      h-100
    self-start
      rounded-full
      border-black
      border-2
      object-contain
      overflow-hidden
      '>
        <Image
        src={user.profilePicture}
        alt="profile"
        width={100}
        height={100}
        />
        </div>

        <div
        className='
          flex
          flex-col
          gap-4
        '
        >
          <div className='
          grid
          grid-cols-2
          '>
             <div>
              Username :
              </div> 
              <div>
                {user.userId}
              </div>
            </div> 
          <div className='
          grid
          grid-cols-2
          '>
             <div>
              Full Name :
              </div> 
              <div>
                {user.fullName}
              </div>
            </div> 
          <div className='
          grid
          grid-cols-2
          '>
             <div>
              Email Id :
              </div> 
              <div>
                {user.email}
              </div>
            </div> 
          <div className='
          grid
          grid-cols-2
          '>
             <div>
              Phone No. :
              </div> 
              <div>
                {user.phoneNumber}
              </div>
            </div> 
          <div className='
          grid
          grid-cols-2
          '>
             <div>
              Address :
              </div> 
              <div>
                {user.address}
              </div>
            </div> 
          <div className='
          grid
          grid-cols-2
          '>
             <div>
              Verified :
              </div> 
              <div>
                {user.isVerified ? "Verified"  : "Not Verified"}
              </div>
            </div> 
          <div className='
          grid
          grid-cols-2
          '>
             <div>
              Verification Status :
              </div> 
              <div>
                {user.verifcationStatus}
              </div>
            </div> 
        </div>
        </div>
      
        </>
        )
        
        }
    
      
      <div>
        </div>
    </div>
  )
}

export default AccountView