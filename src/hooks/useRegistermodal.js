import {create} from 'zustand';

// interface RegisterModalStore {
//     isOpen: boolean ;
//     onOpen: () => void;
//     onClose: () => void; 
// }

const useRegisterModal = create((set) => ({
    isOpen: true,
    onOpen : () => set({isOpen : true}),
    onClose: () => set({isOpen : false})
}))

export default useRegisterModal