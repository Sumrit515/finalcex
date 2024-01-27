import {create} from 'zustand'

// interface useTransferFundsModalInterface {
//     isOpen: boolean;
//     onOpen: () => void
//     onClose: () => void
// }

export const useTransferFundsModal = create((set)=> ({
    isOpen: true,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false}),
}))