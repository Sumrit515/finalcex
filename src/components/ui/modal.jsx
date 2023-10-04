import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./dialog";

// interface ModalProps{
//     title: string;
//     descripition: string
//     isOpen: boolean;
//     onClose: () => void;
//     children?: React.ReactNode
// }

export const Modal = (
    {
        title,
        descripition,
        isOpen,
        onClose,
        children
    }
) => {

    const onChange = (open) => {
        if(!open){
            onClose();
        }
    }

    return(
        <Dialog
        open={isOpen}
        onOpenChange={onChange}
        >
          <DialogContent>
            <DialogHeader>
                 
                 <DialogTitle>
                    {title}
                 </DialogTitle>
                 <DialogDescription>
                    {descripition}
                 </DialogDescription>
            </DialogHeader>
            <div>
                {children}
            </div>
          </DialogContent>
        </Dialog>
    )
}