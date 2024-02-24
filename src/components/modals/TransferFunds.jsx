import { useTransferFundsModal } from "../../hooks/useTransferFundsModal"
import { Modal } from "../ui/modal"
import { Button } from "../ui/button"
import { data } from "autoprefixer";
import { useState } from "react";
import { Switcher } from "../Switcher";
import { FaExchangeAlt } from "react-icons/fa";
import { wallets } from "../../constant/constant";


// interface TrasnferFundsProps {
//     onSubmit :  (amount:  number) =>void;
//     wallet : string,
//     currency: string,
//     isOpen: boolean,
//     onClose: () => void
//     amount: number
//     setAmount: (amount: number) => void
// }

export const TransferFundsModal = ({
    onSubmit,
    wallet,
    currency,
    isOpen,
    onClose,
    amount,
    setAmount,
    selectSymbol,
    setSelectSymbol,
    selectFirstWallet,
    setSelectFirstWallet,
    selectSecondWallet,
    setSelectSecondWallet
}) => {

    const cryptocurrencyList = [
        {
          label: "Tron (TRX)",
          value: "trx",
        },
        {
          label: "Tether Us Dolar (USDT)",
          value: "usdt",
        },
        {
          label: "Binance Coin (BNB)",
          value: "bnb",
        },
        {
          label: "Ethereum (ETH)",
          value: "eth",
        },
        {
          label: "Polygon (MATIC)",
          value: "matic",
        },
      ];
    

    const transferFundsModal = useTransferFundsModal()
    const handleSubmit = (amount) => {
        alert(amount)
        onSubmit(amount)
    }


    return(
        <Modal
        title="Transfer"
        descripition={`Transfer your funds into spot wallet to start trading!`}
        isOpen={transferFundsModal?.isOpen}
        onClose={transferFundsModal?.onClose}
        >

            <div className=" rounded-xl flex flex-row items-center justify-between">
                From
                <div>
                    <Switcher
                     items={wallets.filter(item => item.value !== selectSecondWallet)}
                     value={selectFirstWallet}
                     setValue={setSelectFirstWallet}
                    />
                    </div>
            </div>
            <div className="mt-8 mb-8 w-full hover:cursor-pointer hover:opacity-60">
                <FaExchangeAlt onClick={() => {setSelectFirstWallet(selectSecondWallet) ; setSelectSecondWallet(selectFirstWallet) ;} } className="rotate-90 mx-auto"/>
            </div>
            <div className="rounded-xl flex flex-row items-center justify-between">
                To
                <div>
                    <Switcher
                     items={wallets.filter(item => item.value !== selectFirstWallet)}
                     value={selectSecondWallet}
                     setValue={setSelectSecondWallet}
                    />
                    </div>
            </div>

                <div className="flex flex-row items-center gap-4 justify-between mt-4">
                    <label htmlFor="amount">
                        Amount ({selectSymbol})
                    </label>
                   <input
                   required
                   min="0"
                   type="number"
                   onChange={(e)=> setAmount(Number(e.target.value))}
                   className="
                   w-full
                   p-2
                   mt-2
                   rounded-md
                   border-neutral-200
                   border-[1px]
                   "
                   id="amount"
                   />
                </div>

                <div className="
                pt-6
                space-x-2
                flex
                items-center
                justify-end
                ">
                <Button 
                variant="outline"
                onClick={transferFundsModal?.onClose}>Cancel</Button>
                <Button 
                onClick={() => onSubmit(amount)}
                >Cofirm</Button>
            </div>
        </Modal>
    )
   
}