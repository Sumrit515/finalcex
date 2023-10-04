
/* eslint-disable react-hooks/rules-of-hooks */

import React, { useEffect, useState,Fragment} from "react";

import {About, Contact, Experience, Feedbacks, Hero, StarsCanvas, Navbar, Tech, Works} from '../../components'


import 'react-vertical-timeline-component/style.min.css'

import Support from "../../components/Support";








const index = () => {

  const [data, setData] = useState("adsdsa")
  const [isLoading, setIsLoading] = useState(true);
 
  
 



 const [open, setOpen]  = useState(true)



const line1 = "And the abyss also"
const line2 = "gaxes into you"
const letters = Array.from(line1);


const sentence = {
  hidden: {opacity: 1},
  visible: {
    opacity: 1,
    transition: {
      delay: 2,
      staggerChildren: 0.88
    },
  },
}

const letter = {
  hiddenL: {
    opacity: 0,
    y: 50
  }
}

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
  }),
};

const child = {
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
  hidden: {
    opacity: 0,
    x: -20,
    y: 10,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};






 


return(
  <>
   <div className="relative z-0 bg-[#050816]">
             <div className="
             bg-hero-pattern 
             bg-cover
             bg-no-repeat
             bg-center
             ">
                {/* <Navbar/> */}
                <Hero/>
             </div>
              <About/>
              <Experience/>
              {/* <Tech/> */}
              <Works/>
              <Feedbacks/>
              <Support/>
              <div className="
              relative
              z-0
              ">  
                 <Contact/>
                 <StarsCanvas/>

              </div>
          </div>
  </>
)
}

 


export default index;
