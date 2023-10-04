import PageAd from "../../components/Page";
import useScreenWidth from "../../hooks/useScreenWidth";
import { SignUp } from "@clerk/nextjs";
import Image from 'next/image'
import {motion} from 'framer-motion'
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { slideIn } from "../../utils/motion";
 
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
    justify-between
    '>
       {
              !isTablet &&  ( <motion.div
                variants={slideIn("up", "tween", 2, 1)}
              className='lg:my-auto'>
              <Image  height={1000} width={1000} src="/images/registerClerk.jpg" alt="registrationBanner"/>
                </motion.div>)
            }
   
   <motion.div
    variants={slideIn("up", "tween", 0.2, 1)}
   >

   <SignUp />
   </motion.div>
  

           
          
        </div>
       


  
    </div>
  
  </PageAd>
  );
}