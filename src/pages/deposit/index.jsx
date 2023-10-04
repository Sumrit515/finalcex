/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from "react"
// import { DropdownMenuCheckboxItemProps, DropdownMenuItem } from "@radix-ui/react-dropdown-menu"
import {PuffLoader} from 'react-spinners'
import QRCodeReact from 'qrcode.react'
import { Button } from "../../components/ui/button"


import { Switcher } from "../../components/Switcher"

import axios from "axios"
import { toast } from "react-hot-toast"

const index = () => {

// eslint-disable-next-line react-hooks/rules-of-hooks
const [toggleDropdown, setToggleDropdown] = useState('hidden')
const [toggleNetwork, setToggleNetwork] = useState('hidden')
const [chooseCryptoCurrency, setChooseCryptoCurrency] = useState('Choose a Cryptocurrency')
const [chooseNetwork, setChooseNetwork] = useState('Select The Network')
const [open, setOpen] = useState(false)

const currencyList = [
{
label: "Cryptocurreny",
value: "cryptocurrency"
}, {
label: "Indian Rupees",
value: "inr"
}, {
label: "US Dollars",
value: "usd"
}
]

const netWorkList = [
    {
        label: 'BNB (Binance Smart Chain)',
        value : "bnb"
    }, {
        label: 'Ethereum',
        value: 'ethereum'
    }, {
        label: 'Tron',
        value: "tron"
    },
    {
        label: 'Polygon (Matic)',
        value: 'polygon'
    }
]


const cryptocurrencyList = [
    {
        label: "Tron (TRX)",
        value: "trx"
    },
    {
        label: "Tether Us Dolar (USDT)",
        value: "usdt"
    },
    {
        label: "Binance Coin (BNB)",
        value: "bnb"
    },
    {
        label: "Ethereum (ETH)",
        value: "eth"
    },
    {
        label: "Polygon (MATIC)",
        value: "matic"
    },

]







  const [showStatusBar, setShowStatusBar] = React.useState(true)
  const [showActivityBar, setShowActivityBar] = React.useState(false)
  const [showPanel, setShowPanel] = React.useState(false)
  const [current, setCurrent] = useState("")
  const [currency, setCurrency] = useState("")
  const [network, setNetwork] = useState("")
  const [selectCrypto, setSelectCrypto] = useState("Select the CryptoCurrency")
  const [isDisabled, setIsDisabled] = useState(false)
  const [isLoading, setIsLoading]= useState(false)
  const [showQrCode, setShowQrCode] = useState(false)
  const [apiData, setApiData] = useState({
    address: "",
    blockchain: ""
  })


  const GenerateAddress = async () => {
    console.log("Generating Address")
    try{
        setIsLoading(true)
        setIsDisabled(true)
        const {data} = await axios.get(`/api/fetchUserAddress?blockchain=${network}`)
        setApiData(data)
        setShowQrCode(true)
        toast.success("Address Generated...")
    } catch(e) {
        toast.error("Something went wrong")
        console.log(e)
    } finally{
        setIsLoading(false)
        
    }
  }

  const handleAddressCopy = () => {
    try{
     navigator.clipboard.writeText(apiData.address)
     toast.success("Address Copied...")
    }catch(e){
        console.log(e)
    }
  }


let body = (
    <>
    </>
)

if(currency ==="cryptocurrency" )
{
    body =  (
        <>

        <div className="
        flex
        flex-col
        gap-8
        items-center
        justify-center
        ">
                <div className="
                        grid 
                        grid-cols-2
                        gap-4
                        place-items-center
                        ">
                                <div> 
                                    <h1 className="
                                    text-md
                                    text-black
                                    font-bold
                                    ">
                                    Crypto i want to deposit is :
                                    </h1>
                                
                                </div>
                                
                                <div className="
                            
                                ">
                                <Switcher
                                items={cryptocurrencyList}
                                value={selectCrypto}
                                setValue={setSelectCrypto}
                                />
                                </div>
                        </div>
                <div className="
                        grid 
                        grid-cols-2
                        gap-4
                        place-items-center
                        ">
                                <div> 
                                    <h1 className="
                                    text-md
                                    text-black
                                    font-bold
                                    ">
                                    Blockchain network is : 
                                    </h1>
                                
                                </div>
                                
                                <div className="
                            
                                ">
                             <Switcher
                             items={netWorkList}
                             value={network}
                             setValue={setNetwork}
                             />
                                </div>
                               
                        </div>

                            { !isDisabled && <Button 
                             disabled={isDisabled}
                             onClick={GenerateAddress}
                             className={`
                                mt-6
                                disabled:opacity-70
                                
                                `}>
                                    Generate Address
                                </Button>}

                                {
                                    isLoading && 
                                    <PuffLoader color="#36d7b7" />
                                }
                                {
                                    showQrCode && (
                                        <>
                                       <div className="
                                       flex
                                       flex-row
                                       justify-center
                                       items-center
                                       gap-4
                                       ">
                                        <p>
                                            {apiData.address}
                                            </p>
                                       <Files 
                                       onClick={handleAddressCopy}
                                       className="
                                       ml-4
                                       w-5 h-5
                                       hover:cursor-pointer
                                       "
                                       />
                                       </div>
                                        <QRCodeReact
                                        value={apiData.address}
                                        size={150}
                                        />
                                        </>
                                    )
                                }
        </div>
     
        </>
    )
}

if(currency === "inr") {
    body =(
        <>
        INR deposit
        </>
    )
}

if(currency === "usd") {
    body = (
        <>
        usd Deposit
        </>
    )
}



const onCurrencySelect = (currency ) => {
    setOpen(false)

}
  return (

    <>
    
<div className="
flex
w-full
h-screen
flex-col
items-center
gap-8
mt-10
">
            <div className="
                grid 
                grid-cols-2
                gap-8
                place-items-center
                ">
                        <div> 
                            <h1 className="
                            text-md
                            text-black
                            font-bold
                            ">
                            I Want to deposit :
                            </h1>
                        
                        </div>
                        
                        <div className="
                     
                        ">
                        {/* <DropdownMenu >
                <DropdownMenuTrigger asChild>
                    <Button 
                    variant="outline"
                    onClick={() => console.log(current)}>{currency}</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent  className="w-56">
                    <DropdownMenuLabel>Currency</DropdownMenuLabel>
                    <DropdownMenuSeparator />

                    {currencyList.map((item, i) => {
                        return(
                    <DropdownMenuItem
                    key={i}
                    onClick={() => setCurrency(item)}
                   
                    >
                    {item}
                    </DropdownMenuItem>
                        )
                    })}
                    
                </DropdownMenuContent>
                </DropdownMenu> */}
                   
                 {/* <Popover open={open} onOpenChange={setOpen} >
                    <PopoverTrigger asChild>
                        <Button
                        variant="outline"
                        size="sm"
                        role="combobox"
                        aria-expanded={open}
                        aria-label="Select a Currency"
                        className="w-[200px] justify-between"
                        >
                        <CircleDollarSign className="
                        w-4
                        h-4
                        mr-2"/>
                        Currency
                        <ChevronsUpDown className="ml-auto h-4 w-4 shrink-0 opacity-50"/>
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="
                    w-[200px]
                    p-0
                    ">
                          <Command>
                              <CommandList>
                                  <CommandInput placeholder="Search Currencies..."/>
                                  <CommandEmpty>
                                    No Currency Found.
                                  </CommandEmpty>
                                  <CommandGroup heading="Currencies">
                                     {currencyList.map(( item, i) => {
                                       return(
                                        <CommandItem
                                        key={i}
                                        onSelect={() => onCurrencySelect(item)}
                                        >
                                            <CircleDollarSign className="mr-2 h-4 w-4"/>
                                            {item.label}
                                            <Check
                                            className={(cn(
                                                "ml-auto h-4 w-4",

                                            ))}
                                            />
                                         </CommandItem>
                                       )
                                       
                                     })}
                                  </CommandGroup>
                              </CommandList>
                              <CommandSeparator/>
                              
                          </Command>
                    </PopoverContent>
                 </Popover> */}

{/* <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? currencyList.find((framework) => framework.value === value)?.label
            : "Select framework..."}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." className="h-9" />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {currencyList.map((framework) => (
              <CommandItem
                key={framework.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue)
                  setOpen(false)
                }}
              >
                {framework.label}
                <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
                    value === framework.value ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover> */}
<Switcher
items={currencyList}
value={currency}
setValue={setCurrency}
/>

                        </div>
                </div>  
                  {body}


</div>

    
    </>

  
  )



}

export default index