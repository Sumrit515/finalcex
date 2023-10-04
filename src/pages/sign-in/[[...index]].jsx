/* eslint-disable react/jsx-no-undef */
import useScreenWidth from "../../hooks/useScreenWidth";
import { SignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import {motion} from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from "react";
import {fadeIn, slideIn} from '../../utils/motion'
import PageAd from "../../components/Page";


 
export default function Page() {


    
const currentWidth = useScreenWidth()
const router = useRouter()
const [isTablet, setIsTablet] = useState(false)

useEffect(() => {
currentWidth < 1000 ? setIsTablet(true) : setIsTablet(false)
}, [currentWidth])

  return (
  <PageAd>
  <div className="
  flex
  items-center
  justify-center
  h-full
  w-full
  ">
   
    <div className='
    grid
    grid-rows-2
    lg:grid-cols-2
    gap-x-5
    justify-space
    '>
   
   <motion.div
   variants={slideIn("up", "tween", 0.2, 1)}
   >
   <SignIn />
   </motion.div>
  
   
   {
              !isTablet &&  ( <motion.div
                variants={slideIn("up", "tween", 2, 1)}
              
              className='lg:my-auto'>
              <Image  height={1000} width={1000} src="/images/loginClerk.jpg" alt="registrationBanner"/>
                </motion.div>)
            }

           
          
        </div>
       


  
    </div>
  
  </PageAd>
  
  );
}