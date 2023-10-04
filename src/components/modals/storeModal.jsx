import { useStoreModal } from "../../hooks/useStoreModal"
import { Modal } from "../ui/modal"
import { Button } from "../ui/button"
import { data } from "autoprefixer";

// interface StoreModalProps {
//     onSubmit? :  () => Promise<void>;
// }

export const StoreModal = ({
    onSubmit
}) => {


    const storeModal = useStoreModal()
    const handleSubmit = () => {
        alert(data)
    }

    return(
        <Modal
        title="Are you sure?"
        descripition="Make sure all the details filled by you is correct, wrong details may lead to failure of your verification!"
        isOpen={storeModal.isOpen}
        onClose={storeModal.onClose}
        >
            <div className="
            pt-6
            space-x-2
            flex
            items-center
            justify-end
            ">
                <Button 
                variant="outline"
                onClick={storeModal.onClose}>Cancel</Button>
                <Button 
                onClick={onSubmit}
                >Cofirm</Button>
            </div>
        </Modal>
    )
   
}