import Image from "next/image";
import { Inter } from "next/font/google";
import { useTheme } from "next-themes";


import { useState, useEffect, useCallback } from "react";

import { Hero, About, Experience, Works, Feedbacks, Support,Contact, StarsCanvas } from "../components";

import useCurrentUser from "../hooks/useCurrentUser";
import { useRouter } from "next/navigation";

import { useAuth } from "@clerk/nextjs";


const inter = Inter({ subsets: ["latin"] });

// export async function getServerSideProps(context: NextPageContext) {



//   const session = await getSession(context);


//   if (!session) {
//     return {
//       redirect: {
//         destination: "/auth",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {}
//   }
// }

const SupportCardData = [
  {
    title: "24/7 Support",
    body: "Got a problem? Just get in touch. Our support team is available 24/7.",
    src: "/images/service.gif"
  },
  {
    title: "Blogs",
    body: "News and updates from the world's leading cryptocurrency exchange.",
    src: "/images/blog.gif"
  },
  {
    title: "Careers",
    body: "Help build the future of technology. Start your new career at Tradix.",
    src: "/images/career.gif"
  },
  {
    title: "Community",
    body: "Tradix is global. Join the discussion in our worldwide communities.",
    src: "/images/community.gif"
  },
]

const CardData = [
  {
    title: "Crypto Trading Platform",
    body: '/images/cryptoTrading.gif'

  }, {
     title: "Fast & Secure",
     body: "/images/secure.gif"
  }, {
     title: "Beginner Friendly",
     body: "/images/beginnerFriendly.gif"
  }, {
     title: "Deposit And Withdraw Crypto & Fiats",
     body: "/images/depositFunds.gif"
  }
]

export default function Home() {
  const { theme, setTheme } = useTheme();
  const { data: user} = useCurrentUser()
  const router = useRouter()
  const { isLoaded,userId, sessionId, getToken } = useAuth();
  const redirectToWatch = useCallback(() => {
    router.push('/watch/INR_BUSD')
      }, [router])


      

      // router.push('/about')
      return (
        // <>
        // <div className="
        // ">
        //    <div>
        //         <TvChart/>
        //         </div>
    
        //   <div className="
        //   md:flex
        //   md:flex-row
        //   gap-8
        //   pt-8
        //   flex
        //   flex-col-reverse
        // h-screen
        //   ">

        //   <h1 className="
        //          text-black
        //          font-bold
        //          m-10
        //          flex-1
        //          ml-[150px]
        //         my-auto
        //          text-[72px]
        //          ">
        //              <AnimatedChars
        //               text="Best Exchange"
        //               />
        //               <AnimatedChars
        //               text="Around the"
        //               />
        //               <AnimatedChars
        //               text="world"
        //               />
             
        //          </h1>
    
        //          <div className="
        //         flex-1
        //         ">
        //          <EarthCanvas/>
        //         </div>
                  
    
     
        //   </div>
    
        //   <div className="
        //   flex
        //  md:flex-row
        //  gap-8
        //  flex-col
        //  items-center
        //  h-screen
        //   "> 
        //      <h1 
              
        //      className="
        //       text-black
        //       font-bold
        //       m-10
        //       mt-10
        //       text-center
        //       text-[72px]
        //      ">
        //       <AnimatedChars
        //       text="What is TradEx?"
        //       />
        //      </h1>
    
        //   <div>
        //     <Image
        //     src={"/images/newlogo.gif"}
        //     alt="logo"
        //     width={500}
        //     height={500}
        //     />
        //   </div>
    
        //     </div>
                
        //     <div className="
        //      flex
        //      md:flex-row
        //      md:ml-10
        //      md:mr-10
        //      md:justify-between
        //      flex-col
        //      m-8
        //      mt-10
        //      md:m-0
        //      md:mt-0
        //      gap-8
             
        //      ">
    


    
        
        //   {CardData.map((card, index) => (
            
        //     <Card 
        //     key={index}
        //     title={card.title}
        //     body={card.body}
        //     />
        //   ))}
         
  
              
        //       </div>
               
    
    
        //        <div className="
        //        text-white
        //        w-full
        //        p-10
        //        flex
        //        flex-row
        //        justify-center
        //        items-center
        //        gap-10
        //        aboutGradient
        //        mt-10
        //        "
               
        //        >
        //         <div className="
        //         flex
        //         flex-col
        //         items-center
        //         gap-4
        //         ">
        //              <h1
        //              className="
        //              font-bold
        //              text-[30px]
        //              "
        //              >
        //                $657B 
        //              </h1>
        //                <p className="
        //                font-semibold
        //                ">
        //                 Daily Volume Traded
        //                </p>
        //         </div>
        //         <div className="
        //         flex
        //         flex-col
        //         items-center
        //         gap-4
        //         ">
        //              <h1
        //              className="
        //              font-bold
        //              text-[30px]
        //              "
        //              >
        //                100 +
        //              </h1>
        //                <p className="
        //                font-semibold
        //                ">
        //                 Countries Supported
        //                </p>
        //         </div>
        //         <div className="
        //         flex
        //         flex-col
        //         items-center
        //         gap-4
        //         ">
        //              <h1
        //              className="
        //              font-bold
        //              text-[30px]
        //              "
        //              >
        //                56M +
        //              </h1>
        //                <p className="
        //                font-semibold
        //                ">
        //                 Verified Users
        //                </p>
        //         </div>
                   
    
        //         </div>
    
              
        //         <h1 className="
        //           text-black
        //           font-bold
        //           mt-10
        //           text-[62px]
        //           md:mx-20
        //         ">
               
        //           <AnimatedChars
        //           text="Become a crypto Trader "
        //           />
        //           <AnimatedChars
        //           text="in seconds!"
        //           />
        //         </h1>
              
               
        //        <div className="
        //         flex
        //         md:flex-row
        //         gap-8
        //         md:items-center
               
        //         m-8
        //         mt-10
        //         flex-col
        //         md:justify-between
                
        //         ">
    
        //             <Card
        //             title="Register"
        //             body="/images/register.gif"
        //             />
        //             <Card
        //             title="Get Verified"
        //             body="/images/verified.gif"
        //             />
        //             <Card
        //             title="Deposit Funds"
        //             body="/images/piggyBank.gif"
        //             />
        //             <Card
        //             title="Start Trading"
        //             body="/images/chart.gif"
        //             />
        //         </div>
    
        //        <div className="
        //        flex
        //        flex-row
        //         items-center
        //        mt-10
        //        gap-8
            
               
        //        justify-center
        //        md:h-screen
        //        ">
    
               
    
        //         <h1 className="
        //             flex-1
        //             text-black
        //             font-bold
        //       text-center
                  
        //             text-[72px]
                    
        //         ">
        //        <AnimatedChars
        //        text="Live market data"
        //        />
                
        //         <AnimatedChars
        //         text="At your finger "
        //         />
        //         <AnimatedChars
        //         text="tips. "
        //         />
        //         </h1>
    
        //         <div className="
        //         flex-1
        //         ">
        //           <Image
        //           src='/images/tradingData.jpg'
        //           alt="trading"
        //           width={400}
        //           height={400}
        //           />
        //         </div>
                   
    
        //        </div>
    
        //        <div className="
        //             flex
        //             flex-col
        //            md:mt-10
        //             mb-[150px]
        //             gap-8
                  
        //        ">
        //           <h1 className="
        //              flex-1
        //              text-black
        //              font-bold
        //              text-center
                     
        //              ml-[150px]
                    
        //              text-[72px]
        //           ">

        //           <AnimatedChars
        //           text="Get in touch."
        //           />
        //           <AnimatedChars
        //           text="Stay in touch."
        //           />
        //           </h1>
               
                 
        //         </div> 

        //         <div className="
        //         flex
        //         md:flex-row
        //         gap-8  
        //         md:mx-8
        //         m-8
        //         flex-col           
        //         ">
        //          {
        //           SupportCardData.map((item, index) => (
        //              <div
        //              className="
                    
                     
        //              "
        //              key={index}
        //              >

        //              <SupportCards
        //              key={index}
        //              title={item.title}
        //              body={item.body}
        //              src={item.src}
        //              />
        //              </div>
        //           ))
        //          }
        //         </div>

        //         <div className="
        //        text-white
        //        w-full
        //        p-10
             
        //      text-center
        //        gap-10
        //        aboutGradient
        //        "
               
        //        >
        //         <div className="
        //           font-bold
        //           text-[40px]
                  
        //           mx-auto
        //         ">
                    
        //             <AnimatedChars
        //             text="Our Parteners"
        //           />

        //         </div>
              
                   
        //            <div className="
        //            flex
        //            flex-row
        //            mt-4
        //            gap-8
        //            text-[25px]
        //            font-semibold
        //            items-center
        //            justify-center
        //            "> 

        //            <div>
        //             Binance
        //             </div>
        //            <div>
        //             Polygon
        //             </div>
        //             <div>
        //               SpeciEx
        //             </div>

        //            </div>
    
        //         </div>

        //         <div className="
        //         flex
        //         md:flex-row
        //         flex-col
        //         gap-8
        //         mt-[150px]
        //         justify-center
        //         items-center
        //         md:mx-8
        //         md:mb-[100px]
        //         ">
        //          <div className="
        //          text-[42px]
        //          font-bold
        //          self-center
        //          flex-1
        //          ">
                   
        //            <AnimatedChars
        //            text="What our Customer "
        //            />
        //            <AnimatedChars
        //            text="has to say?"
        //            />
        //          </div>
        //          <div className="
        //          flex-1
        //          self-center
        //          h-[450px]
        //          ">
        //           <CarouselExample/>
        //           </div>
        //         </div>
    
        //   </div>
    
        
       
        // </>
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
  // return (
  //   <div className="
 
 
  //   ">
  //     <ToasterProvider />
    
  //  {/* <WebSoketPrice
  //  symbol="btcusdt@ticker"/> */}
  

  //     {/* <p >Logged in as : {user?.name}</p>
  //     <button className="
  //     h-10
  //     w-full
  //     bg-black
  //     text-white
  //     "
  //     onClick={() => signOut()}
  //     >Sign Out</button>


  //     <div className=""
  //     onClick={redirectToWatch}
  //     >
  //       click to trade
  //     </div> */}

  //   {/* <TvChart/> */}

  //   </div>
    

  //   //   <ThemeProvider attribute="class">
  //   //   <ToasterProvider/>
  //   //   <LoginModal/>
  //   //   <RegisterModal/>
  //   //   <Navbar />

  //   // </ThemeProvider>
  // );
}
