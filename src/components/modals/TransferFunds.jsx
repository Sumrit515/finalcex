import { useTransferFundsModal } from "../../hooks/useTransferFundsModal"
import { Modal } from "../ui/modal"
import { Button } from "../ui/button"
import { data } from "autoprefixer";
import { useState } from "react";

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
    setAmount
}) => {


    // const transferFundsModal = useTransferFundsModal()
    const handleSubmit = (amount) => {
        alert(amount)
        onSubmit(amount)
    }


    return(
        <Modal
        title="Are you sure?"
        descripition={`You are transferring ${currency} to your ${wallet} wallet!`}
        isOpen={isOpen}
        onClose={onClose}
        >

                <div>
                    <label htmlFor="amount">
                        Amount
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
                onClick={onClose}>Cancel</Button>
                <Button 
                onClick={() => onSubmit(amount)}
                >Cofirm</Button>
            </div>
        </Modal>
    )
   
}