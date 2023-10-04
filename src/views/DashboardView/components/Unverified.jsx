
import Heading from '../../../components/Heading'
import {Button} from '../../../components/ui/button'
import CountriesList from 'countries-list'
import ReactCountryFlag from "react-country-flag"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../../../components/ui/dropdown-menu'
import React, { useState } from 'react'
import ImageUpload from './ImageUpload'
import { CheckCircle } from 'lucide-react'

import { useStoreModal } from '../../../hooks/useStoreModal'
import { StoreModal } from '../../../components/modals/storeModal'
import axios from 'axios'
import { toast } from 'react-hot-toast'



const Unverified = () => {

    const STEPS = {
        country : 0,
        name : 1,
        address : 2,
        photo : 3,
        identityCard : 4,
        success : 5
    }

    const [step, setStep] = useState<STEPS>(STEPS.country)
    const [isNextDisabled, setIsNextDisabled] = useState(false)
    const [isBackDisabled, setIsBackDisabled] = useState(false)
    const [country, setCountry] = useState("Select a country")
    const [firstName, setFirstName] = useState('')
    const [middleName, setMiddleName] = useState('')
    const [lastName, setLastName] = useState('')
    const [hno, setHno] = useState("")
    const [street, setStreet] = useState("")
    const [city , setCity] = useState("")
    const [pincode, setPincode] = useState("")
    const [state, setState] = useState("")
    const [image, setImage] = useState("")
    const [identityCard, setIdentityCard] = useState("")
    const [document, setDocument] = useState({
        name: "Select document type", 
        value: "Select document type"
    })

    const storeModal = useStoreModal()

    const documenList = [
        {
            name:"Aadhar", 
            value:"aadhar"
        }, 
        {
          name: "Pan Card",
          value: "pan"
        }, 
        {
            name: "Identity Card", 
            value: "identity"
        }
    ]

    const allCountriesWithFlags = Object.entries(CountriesList.countries).map(([countryCode, countryInfo]) => ({
        code: countryCode,
        name: countryInfo.name,

      }));

    let body = (<>
    </>)

    if(step === STEPS.country){
        body = (
            <>
            <div 
            className='
            flex
            flex-col
            gap-4
            '
            >
            <Heading
              title='Where are you from?'
              subtitle='Select your residency and follow the steps'
              />
                 <DropdownMenu >
                    
                        <DropdownMenuTrigger asChild>
                            <Button 
                            
                            >{country}</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent  className="w-60
                        h-56
                       overflow-scroll 
                        ">
                            <DropdownMenuLabel>Country</DropdownMenuLabel>
                            <DropdownMenuSeparator />

                            {allCountriesWithFlags.map((item, i) => {
                                return(
                            <DropdownMenuItem
                            key={i}
                            onClick={() => setCountry(item.name)}
                        className='
                        flex
                        flex-row
                        gap-4
                        items-center
                        '
                            >
                                <ReactCountryFlag
                countryCode={item.code}
                svg
               className='w-4 h-4'
                title={item.code}
            /> {item.name} ({item.code})
                            </DropdownMenuItem>
                                )
                            })}
                            
                        </DropdownMenuContent>
                        </DropdownMenu>
                </div>
              
            </>
        )
    }
    if(step === STEPS.name){
        body = (
            <>
            <div>
                <Heading
                title='Enter Your Name'
                subtitle='Make sure you enter your legal name'
                />
                <div className='
                mt-4
                '>
                    <form
                    className='
                    grid
                    grid-cols-2
                    gap-4
                    
                    '
                    >
                        <div className='
                        flex
                        flex-col
                        gap-6
                        '>
                        <label
                        className='
                        p-2
                        '
                        htmlFor='firstName'>
                          Your first name :
                        </label>
                        <label
                        className='
                        p-2
                        '
                        htmlFor='middleName'>
                          Your Middle name :
                        </label>
                        <label
                        className='
                        p-2
                        '
                        htmlFor='lastName'>
                          Your Last name :
                        </label>
                        </div>
                        
                        <div className='
                        flex
                        flex-col
                        gap-6
                        '>
                        <input
                        onChange={(e) =>  setFirstName(e.target.value)}
                        className=' 
                        ml-4
                        p-2
                        outline
                        rounded-md
                        '
                        id='firstName'
                          />
                       
                        <input
                        onChange={(e) => setMiddleName(e.target.value)}
                        className='
                        ml-4
                        p-2
                        outline
                        rounded-md
                        '
                        id='middleName'
                          />
                        
                        <input
                        onChange={(e) => setLastName(e.target.value)}
                        className='
                        ml-4
                        p-2
                        outline
                        rounded-md
                        '
                        id='lastName'
                          />
                        </div>
                        
                    </form>
                    </div>
            </div>
            </>
        )
    }
    if(step === STEPS.address){
        body = (
            <>
            <div>
                <Heading
                title='Enter Your Address'
                subtitle='Make sure you enter your legal address'
                />
                <div className='
                mt-4
                '>
                    <form
                    className='
                    grid
                    grid-cols-2
                    gap-4
                    
                    '
                    >
                        <div className='
                        flex
                        flex-col
                        gap-6
                        '>
                        <label
                        className='
                        p-2
                        '
                        htmlFor='hno'>
                          Your house number :
                        </label>
                        <label
                        className='
                        p-2
                        '
                        htmlFor='street'>
                         Enter street name :
                        </label>
                        <label
                        className='
                        p-2
                        '
                        htmlFor='city'>
                          City in which you lives :
                        </label>
                        <label
                        className='
                        p-2
                        '
                        htmlFor='pincode'>
                          Your area pincode :
                        </label>
                        <label
                        className='
                        p-2
                        '
                        htmlFor='state'>
                          State in which you lives :
                        </label>
                        </div>
                        
                        <div className='
                        flex
                        flex-col
                        gap-6
                        '>
                        <input
                        onChange={(e) =>  setHno(e.target.value)}
                        className=' 
                        ml-4
                        p-2
                        outline
                        rounded-md
                        '
                        id='hno'
                          />
                       
                        <input
                        onChange={(e) => setStreet(e.target.value)}
                        className='
                        ml-4
                        p-2
                        outline
                        rounded-md
                        '
                        id='street'
                          />
                        
                        <input
                        onChange={(e) => setCity(e.target.value)}
                        className='
                        ml-4
                        p-2
                        outline
                        rounded-md
                        '
                        id='city'
                          />
                        <input
                        onChange={(e) => setPincode(e.target.value)}
                        className='
                        ml-4
                        p-2
                        outline
                        rounded-md
                        '
                        id='pincode'
                          />
                        <input
                        onChange={(e) => setState(e.target.value)}
                        className='
                        ml-4
                        p-2
                        outline
                        rounded-md
                        '
                        id='state'
                          />
                        </div>
                        
                    </form>
                    </div>
            </div>
            </>
        )
    }
    if(step === STEPS.photo){
        body = (
            <>
            <div >
             <Heading
             title='Please upload your passport size photo'
             subtitle='Make sure that the photo is latest and clear'
             />
             <div className='
             mt-4
             '>
                <ImageUpload
                onChange={(value)=> setImage(value)}
                value={image}
                />
             </div>
            </div>
            </>
        )
    }
    if(step === STEPS.identityCard){
        body = (
            <>
             <div >
             <Heading
             title='Please upload your Identity Card'
             subtitle='Make sure that the photo is latest and clear'
             />
             <div className='
             mt-4
             '>
                <div>
                <DropdownMenu >
                    
                    <DropdownMenuTrigger asChild>
                        <Button 
                        className='
                        w-56
                        '
                        >{document.name}</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent  className="w-60
                    h-56
                   overflow-scroll 
                    ">
                        <DropdownMenuLabel>Document List</DropdownMenuLabel>
                        <DropdownMenuSeparator />

                        {documenList.map((item, i) => {

                            return(
                        <DropdownMenuItem
                        key={i}
                        onClick={() => setDocument(item)}
                    className='
                    flex
                    flex-row
                    gap-4
                    
                    items-center
                    '
                        >
                             {item.name} 
                        </DropdownMenuItem>
                            )
                        })}
                        
                    </DropdownMenuContent>
                    </DropdownMenu>

                    </div>

               <div className='
               mt-4
               '>
               <ImageUpload
                
                onChange={(value)=> setIdentityCard(value)}
                value={identityCard}
                />
                </div>
               
             </div>
            </div>
            </>
        )
    }
    if(step === STEPS.success){
        body = (
            <>
            <div className='
            flex
            flex-col
            items-center
            gap-8
            '>
                <h1 className='
                font-bold
                text-[24px]
                '>
                    All set
                    </h1>
                    <div>
                    <CheckCircle 
                    color='green'
                    size={50}
                    />
                    </div>
                    <div>
                        You have successfully completed all the steps and <br/>
                        your account will be Verified within the next 1 day.
                    </div>
            </div>
            </>
        )
    }

    const onBack = () => {
        if(step === STEPS.country){
            return
            
        }
           setIsBackDisabled(false)
        setStep(value => value - 1)
    }

    const onNext = () => {
    
     if(step === STEPS.identityCard){
    
        storeModal.onOpen()
       
         return
    }

  
 
    setIsNextDisabled(false)
        setStep(value => value + 1)

        }
        let data;

        const handleSubmit = async () => {
            try{
    
    
                 data = {
                  country,
                  firstName,
                  middleName,
                  lastName,
                  hno,
                  street,
                  city,
                  pincode,
                  state,
                  documentType: document.value,
                  documentUrl: identityCard,
                  passportPicture: image
                }
    
                await axios.post("/api/fetchVerifiedUser", data)
                toast.success("Details Submitted")
                setStep(STEPS.success)
                storeModal.onClose()
            } catch(e) {
                console.log(e)
                toast.success("Something went wrong")
            }
            finally{
    
            }
        }
      

  return (
    <div className='
    flex
    flex-col
    gap-8
    justify-between
    w-[500px]
    mt-8
   h-screen
   p-8
   pb-[250px]
    '>
       
       <StoreModal
       onSubmit={() => handleSubmit()}/>

        {body}

        <div className='
        flex
        flex-row
        gap-6
        self-end
        '>
            <Button
            disabled={isBackDisabled}
            onClick={onBack}
            >
                Go Back
            </Button>
            <Button
            disabled={isNextDisabled}
             onClick={onNext}
            >
               Next
            </Button>
        </div>
    </div>
  )
}

export default Unverified