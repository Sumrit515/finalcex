/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

import { SectionWrapper } from '../hoc'

import { motion } from 'framer-motion'
import { styles } from '../styles'
import {services} from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import Image from 'next/image'


const ServiceCard = ({
  index, 
  title,
  icon
}) => {
  return(
    <div className="
    xs:w-[250px]
    w-full
    "
    > 
     <motion.div
     variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
     className='w-full
     green-pink-gradient
     p-[1px]
     rounded-[20px]
     shadow-card
     '
     >
      <div
      className='
      bg-tertiary
      rounded-[20px]
      py-5
      px-12
      min-h-[280px]
      flex
      justify-evenly
      items-center
      flex-col
      '
      options={{
max: 45,
scale:1,
speed: 450
      }}
      >
        <Image
        src={icon}
        alt={title}
        className='
        w-16
        h-16
        object-contain
        '
        />
        <h3 className='
        text-white
        text-[20px]
        font-bold 
        text-center
        '>
          {title}
        </h3>
         
      </div>
        
     </motion.div>
      
    </div>
  )
}

const About = () => {
  return (
    <>
    <motion.div 
    variants={textVariant}
    
    >
      <p className={styles.sectionSubText}>
        Introduction
      </p>
      <h2 className={styles.sectionHeadText}>Overview</h2>
    </motion.div>
    <motion.p
    variants={fadeIn("", "", 0.1, 1)}
    className='
    mt-4
    text-white
    text-[17px]
    max-w-3xl
    leading-[30px]
    '
    >
   Welcome to TradEx, your passport to the thrilling world of cryptocurrency trading. Whether you're a seasoned pro or just starting, our platform is designed with you in mind. With a diverse selection of trading pairs, state-of-the-art security, and an intuitive interface, we're here to make your crypto journey seamless and secure. At TradEx, we believe in accessibility, efficiency, and rewarding experiences. Join us today and be part of the future of crypto trading. Explore, invest, and thrive with confidence, all in one place. Welcome to the heart of crypto innovation.

    </motion.p>
    
  <div className='
  mt-20
  flex
  flex-wrap
  gap-10
  '>
   {services.map((service, index) => (
    <ServiceCard 
    key={service.title}
    index={index}
    {...service}
    />
   ))}
  </div>

    </>
  )
}

export default SectionWrapper(About, "about")