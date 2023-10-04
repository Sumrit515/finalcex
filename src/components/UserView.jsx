import React, {useState, useEffect} from 'react'
import Page from '../components/Page'
import {BsFillPersonFill} from 'react-icons/bs'
import {FcGoogle} from 'react-icons/fc'
import Image from 'next/image'
import { useRouter } from 'next/router'
import useScreenWidth from '../hooks/useScreenWidth'

// interface UserViewProps{
//   textPrimary: string;
//   textSecondary: string;
//   textSecondaryToggle: string;
// }

const UserView= ({
  textPrimary,
  textSecondary,
  textSecondaryToggle
}) => {

const currentWidth = useScreenWidth()
     const router = useRouter()
     const [isTablet, setIsTablet] = useState(false)

useEffect(() => {
  currentWidth < 1000 ? setIsTablet(true) : setIsTablet(false)
}, [currentWidth])

  return (
   <Page>
    <div className='
    grid
    grid-rows-2
    lg:grid-cols-2
    gap-x-5
    justify-space
    '>
   
        <div className='
        flex
        flex-col
        gap-2
        lg:p-8
       
        rounded-lg
        mt-8
        '>
            <div 
            className='
            flex
            flex-col
            gap-2
           
            '
>
                  <div className='mb-10 text-4xl'>
                  Welcome to UniExchange!
                  </div>
              

                  <div
                  className='flex p-4 flex-row 
                  justify-between 
                  items-center
                  
                  text-white dark:text-blue-500 bg-violet-500 hover:bg-violet-400  hover:cursor-pointer rounded-[10px]'
                  >
                  <BsFillPersonFill/>
                  <div className='mx-auto'>
                  {textPrimary}
                  </div>
                    
                  
                  </div>

                      <div className='
                      flex
                      flex-row
                      items-center
                      justify-center
                      gap-2
                      m-4
                      '>
                      <hr className='
                      w-full
                      border-black
                      '/> Or
                      <hr className='
                      w-full
                      border-black
                      '/>
                      </div>
</div>
                      <div className=' 
                      bg-gray-300
                      hover:bg-gray-200
                      flex
                      flex-row
                      items-center
                      justify-between
                      hover:cursor-pointer
                      p-4                      
                      rounded-[10px]
                      '>
                      <FcGoogle/> 
                      <div 
                      className='
                      mx-auto
                      '>
                      Continue With Google
                      </div>
                      
                      </div>
                      <div className='
                      mt-8
                      '>
                        {textSecondary} <span onClick={() => router.push(textSecondaryToggle === 'Log in' ? '/login' : 'register')} className='hover:underline cursor-pointer font-bold' >{textSecondaryToggle}</span>
                      </div>
            </div>
            {
              !isTablet &&   <div  className='lg:my-auto'>
              <Image  height={1000} width={1000} src="/images/registrationBanner.png" alt="registrationBanner"/>
                </div>
            }
          
        </div>
       
    </Page>
  )
}
export default UserView