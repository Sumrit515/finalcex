
/* eslint-disable react-hooks/rules-of-hooks */

import React, { useEffect, useState,Fragment} from "react";

import {About, Contact, Experience, Feedbacks, Hero, StarsCanvas, Navbar, Tech, Works} from '../../components'











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
<div class="alert alert-primary" role="alert">
  A simple primary alert—check it out!
</div>
<div class="alert alert-secondary" role="alert">
  A simple secondary alert—check it out!
</div>
<div class="alert alert-success" role="alert">
  A simple success alert—check it out!
</div>
<div class="alert alert-danger" role="alert">
  A simple danger alert—check it out!
</div>
<div class="alert alert-warning" role="alert">
  A simple warning alert—check it out!
</div>
<div class="alert alert-info" role="alert">
  A simple info alert—check it out!
</div>
<div class="alert alert-light" role="alert">
  A simple light alert—check it out!
</div>
<div class="alert alert-dark" role="alert">
  A simple dark alert—check it out!
</div>
  </>
)
}

 


export default index;
