/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

import { SectionWrapper } from '../hoc'

import { motion } from 'framer-motion'
import { styles } from '../styles'
import {support} from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import Image from 'next/image'


const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    source_code_link
  }) => {
  
  
    return(
  <motion.div 
  variants={fadeIn("up", "spring", index * 0.5, 0.7)}
  >
    <div
    options={{
      max: 45,
      scale: 1,
      speed: 450
    }}
    className="
    bg-tertiary
    p-5
    rounded-2xl
    sm:w-[360px]
    w-full
    "
    > 
          <div className="
          relative
          w-full
          h-[230px]
          ">
               <Image
               src={image}
               alt={name}
               width={500}
               height={500}
               className="
               w-full
               h-full
               object-cover
               rounded-2xl
               "
               />
  
               {/* <div className="
               absolute inset-0
              flex
              justify-end
              m-3
              card-img_hover
               ">
                  <div
                  onClick={() => window.open(source_code_link, "_blank")}
                  className="
                  black-gradient
                  w-10
                  rounded-full
                  h-10
                  flex
                  justify-center
                  items-center
                  cursor-pointer
                  "
                  >
                       <Image
                       width={100}
                       height={100}
                       src={github}
                       alt="github"
                       className="
                       w-1/2
                       h-1/2
                       object-contain
                       "
                       />
                  </div>
               </div> */}
          </div>
  
          <div className="
          mt-5
          ">
               <h3 className="
               text-white
               font-bold
               text-[24px]
               ">{name}</h3>
               <p className="
               mt-2
               text-white
               text-[14px]
               ">{description}</p>
          </div>
  
         
    </div>
  
  </motion.div>
    )
  }

const Support = () => {
  return (
    <>
    <motion.div 
    variants={textVariant}
    
    >
      <p className={styles.sectionSubText}>
        Support
      </p>
      <h2 className={styles.sectionHeadText}>Get in Touch.</h2>
      <h2 className={styles.sectionHeadText}>Stay in Touch.</h2>
    </motion.div>
    <motion.p
    variants={fadeIn("", "", 0.1, 1)}
    className='
    mt-4
    text-secondary
    text-[17px]
    max-w-3xl
    leading-[30px]
    '
    >
   
 
    </motion.p>
    
  <div className='
  mt-20
  flex
  flex-wrap
  gap-10
  '>
   {support.map((service, index) => (
    <ProjectCard key={`project-${index}`}
    index={index}
    {...service}
    />
   ))}
  </div>

    </>
  )
}

export default SectionWrapper(Support, "support")