import {BadgeDollarSign  ,KeyRound, Settings, ShieldCheck, UserCircle2 } from 'lucide-react'
import React, { useState } from 'react'
import ActiveComponent from './ActiveComponent'

const Sidebar = () => {

    const [activetab, setActiveTab] = useState('account')

  return (
    <div className='
    flex
    flex-row
   w-full
   h-full
 
    '>
       <div className='
       flex
       flex-col
       text-black
       md:w-[170px]
       w-[50px]
       
       '> 

       <div className='
       p-2
       mb-4
       font-semibold
       text-center
       pl-4
       pt-4
       
       '>
         <div
         
         className='
         
         '>

         </div>
         <p className='
         md:block
         hidden
         '>
         Dashboard
         </p>
         
         </div>
         <hr
         className='
         w-full
         border-black
         '
         />
         <div
         className={`
         p-4
         pl-4
       pt-4
         flex
         gap-2
         flex-row
         ${activetab === "account"? "text-yellow-700 font-bold ": ""}
         hover:cursor-pointer
         hover:opacity-80
         `}
         onClick={
            () => setActiveTab("account")
         }
         >
            <UserCircle2/> 
          
          <p 
          className='
          hidden
          md:block
          '
          >
          Account
            </p> 
         </div>
         <div
         className={`
         p-4
         pl-4
       pt-4
         flex
         gap-2
         flex-row
         ${activetab === "funds"? "text-yellow-700 font-bold ": ""}
         hover:cursor-pointer
         hover:opacity-80
         `}
         onClick={
            () => setActiveTab("funds")
         }
         >
            <UserCircle2/> 
          
          <p 
          className='
          hidden
          md:block
          '
          >
          Funds
            </p> 
         </div>
         <div
            className={`
            p-4
            flex
            gap-2
            flex-row
            ${activetab === "security"? "text-yellow-700 font-bold ": ""}
            hover:cursor-pointer
            hover:opacity-80
            `}
           onClick={
            () => setActiveTab("security")
         }
         >
            <KeyRound/>
           <p
            className='
            hidden
            md:block
            '
           >
            Security
            </p>
         </div>
         <div
          className={`
          p-4
          flex
          gap-2
          flex-row
          ${activetab === "identification"? "text-yellow-700 font-bold ": ""}
          hover:cursor-pointer
          hover:opacity-80
          `}
           onClick={
            () => setActiveTab("identification")
         }
         >
            <ShieldCheck/>
            <p
             className='
             hidden
             md:block
             '
            >
            Identification
            </p>
            
         </div>
         <div
          className={`
          p-4
          flex
          gap-2
          flex-row
          ${activetab === "payment"? "text-yellow-700 font-bold ": ""}
          hover:cursor-pointer
          hover:opacity-80
          `}
           onClick={
            () => setActiveTab("payment")
         }
         >
            <BadgeDollarSign 
            className='
            peer
            '
            />
            <p
            className='
            md:block
            hidden
            
            '
            >
               Payment
            </p>
            
         </div>
         <div
          className={`
          p-4
          flex
          gap-2
          flex-row
          ${activetab === "settings"? "text-yellow-700 font-bold ": ""}
          hover:cursor-pointer
          hover:opacity-80
          `}
           onClick={
            () => setActiveTab("settings")
         }
         >
            <Settings />
            <p
             className='
             hidden
             md:block
             '
            >
               Settings
            </p>
            
         </div>
        

        </div>
       <hr
       className='
      border-2
       color-black
       rotate-180
       min-h-screen
       '
       />
        <div className='
       
        ml-8
        flex-grow
        '>
           <ActiveComponent
           active={activetab}
           />
        </div>
    </div>
  )
}

export default Sidebar