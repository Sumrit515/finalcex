import Image from "next/image";
import { Inter } from "next/font/google";
import { useTheme } from "next-themes";


import { useState, useEffect, useCallback } from "react";

import { Hero, About, Experience, Works, Feedbacks, Support,Contact, StarsCanvas } from "../components";

import useCurrentUser from "../hooks/useCurrentUser";
import { useRouter } from "next/navigation";

import { useAuth } from "@clerk/nextjs";
import axios from "axios";


const inter = Inter({ subsets: ["latin"] });




export default function Home() {
  const { theme, setTheme } = useTheme();
  const { data: user} = useCurrentUser()
  const router = useRouter()
  const { isLoaded,userId, sessionId, getToken } = useAuth();
 
 
  
      return (

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
      );
 
}
