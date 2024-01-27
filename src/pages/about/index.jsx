
/* eslint-disable react-hooks/rules-of-hooks */

import React, { useEffect, useState,Fragment} from "react";

import {About, Contact, Experience, Feedbacks, Hero, StarsCanvas, Navbar, Tech, Works} from '../../components'











const index = () => {

  const [data, setData] = useState("adsdsa")
  const [isLoading, setIsLoading] = useState(true);
 
  
 



 const [open, setOpen]  = useState(true)




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
